import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TradingCard from '../TradingCard';

export default {
  title: 'TradingCard',
  component: TradingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TradingCard>;

const Template: ComponentStory<typeof TradingCard> = (args) => (
  <TradingCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Ace',
};
