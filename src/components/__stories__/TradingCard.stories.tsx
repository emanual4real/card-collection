import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TradingCard from '../TradingCard';
import cardFront from '../__fixtures__/gib-ekim.jpg';
import cardBack from '../__fixtures__/spellfire-back.jpg';

export default {
  title: 'TradingCard',
  component: TradingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TradingCard>;

const Template: ComponentStory<typeof TradingCard> = (args) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: '50px',
    }}
  >
    <TradingCard {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Ace',
  images: { front: cardFront, back: cardBack },
};

export const Large = Template.bind({});

Large.args = {
  title: 'King',
  size: 'large',
  images: { front: cardFront, back: cardBack },
};

export const NoImage = Template.bind({});
NoImage.args = {
  title: 'Jack',
  images: { front: undefined, back: undefined },
};
