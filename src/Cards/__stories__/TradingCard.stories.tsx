import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TradingCard from '../TradingCard';
import { spellfireCard } from '../__fixtures__/cards.fixtures';

export default {
  title: 'Card/TradingCard',
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
  card: spellfireCard,
};

export const Large = Template.bind({});

Large.args = {
  card: spellfireCard,
  size: 'large',
};

export const NoImage = Template.bind({});
NoImage.args = {
  card: { ...spellfireCard, front: undefined, back: undefined },
};
