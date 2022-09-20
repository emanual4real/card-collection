import { Card, HoverProps } from '../types';
import cardFront from './gib-ekim.jpg';
import cardBack from './spellfire-back.jpg';

export const hover: HoverProps[] = [
  {
    top: 0,
    left: 0,
    width: 45,
    height: 50,
    color: '#FF0000',
    text: 'Hero icon',
  },
  {
    top: 185,
    left: 0,
    width: 90,
    height: 35,
    color: '#FF0000',
    text: 'Series',
  },
  {
    top: 185,
    left: 100,
    width: 90,
    height: 30,
    color: '#FF0000',
    text: 'Card Name',
  },
  {
    top: 245,
    left: 144,
    width: 40,
    height: 20,
    color: '#FF0000',
    text: 'Card Number',
  },
  {
    top: 215,
    left: 0,
    width: 175,
    height: 45,
    color: '#FF0000',
    text: 'Card Abilities',
  },
];

export const spellfireCard: Card = {
  id: 'someId',
  name: 'Gib Ekim',
  cardNumber: 4,
  cardsInSeries: 25,
  tradingCardGame: 'Spellfire',
  series: 'Chase',
  edition: 'First Edition',
  front: cardFront,
  back: cardBack,
  features: hover,
};
