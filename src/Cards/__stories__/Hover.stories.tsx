import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hover from '../Hover';
import { hover } from '../__fixtures__/cards.fixtures';

export default {
  title: 'Card/Hover',
  component: Hover,
} as ComponentMeta<typeof Hover>;

const Template: ComponentStory<typeof Hover> = (args) => (
  <div
    style={{
      position: 'relative',
      width: '200px',
      height: '200px',
      backgroundColor: '#eee',
    }}
  >
    <Hover {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  ...hover[0],
};
