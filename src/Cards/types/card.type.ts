type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface HoverProps {
  top: number;
  left: number;
  width: number;
  height: number;
  color: Color;
  text: string;
}

export interface Card {
  id: string;
  name: string;
  cardNumber: number;
  cardsInSeries: number;
  tradingCardGame: string;
  series: string;
  edition: string;
  front?: string;
  back?: string;
  features?: HoverProps[];
}
