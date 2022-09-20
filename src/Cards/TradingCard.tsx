import React, { useState } from 'react';
import Hover from './Hover';
import './TradingCard.css';
import { Card } from './types';

const TradingCard = ({
  card,
  size,
}: {
  card: Card;
  size?: 'small' | 'large';
}) => {
  const { front, back, features } = card;

  const [isFront, setIsFront] = useState<boolean>(true);
  const [className, setClassName] = useState<string>();

  const flipCard = () => {
    setClassName('flipping-card');
    setTimeout(() => setIsFront(!isFront), 1500);
    setTimeout(() => setClassName(''), 3000);
  };

  const getClassNames = () => {
    const classes = ['baseTradingCard'];

    if (!front || !back) classes.push('noImageTradingCard');

    if (size === 'small') {
      classes.push('smallTradingCard');
    } else {
      classes.push('largeTradingCard');
    }

    if (className) classes.push(className);

    return classes.join(' ');
  };

  return (
    <div className={getClassNames()}>
      <button
        type="button"
        onClick={flipCard}
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
          border: 'none',
        }}
      >
        <img
          src={isFront ? front : back}
          alt={isFront ? 'front of card' : 'back of card'}
          style={{ width: '100%', height: '100%' }}
        />
        {features?.map((row) => (isFront ? <Hover {...row} /> : null))}
      </button>
    </div>
  );
};

TradingCard.defaultProps = {
  size: 'small',
};

export default TradingCard;
