import React, { useState } from 'react';
import './TradingCard.css';

const TradingCardBaseStyle: React.CSSProperties = {
  position: 'relative',
  borderRadius: '5px ',
};

const TradingCardSmallStyle: React.CSSProperties = {
  ...TradingCardBaseStyle,
  width: `${64 * 3}px`,
  height: `${89 * 3}px`,
};

const TradingCardLargeStyle: React.CSSProperties = {
  ...TradingCardBaseStyle,
  width: `${64 * 5}px`,
  height: `${89 * 5}px`,
};

const TradingCard = ({
  title,
  size,
  images,
}: {
  title: string;
  size?: 'small' | 'large';
  images: { front?: string; back?: string };
}) => {
  const { front, back } = images;

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
      </button>
    </div>
  );
};

TradingCard.defaultProps = {
  size: 'small',
};

export default TradingCard;
