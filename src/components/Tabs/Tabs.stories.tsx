import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Tabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: Story = (args: any) => <Tabs {...args} />;
export const Tab = Template.bind({});
Tab.args = {};
