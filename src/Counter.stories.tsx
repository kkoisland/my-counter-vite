import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Counter from './Counter';

export default {
  title: 'Example/Counter',
  component: Counter,
} as Meta<typeof Counter>;

const Template: StoryFn<typeof Counter> = () => <Counter />;

export const Default = Template.bind({});
