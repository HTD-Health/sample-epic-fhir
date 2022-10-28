import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { TextField, IProps } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
} as Meta;

const Template: Story<IProps> = (args: any) => <TextField {...args} />;
export const Primary = Template.bind({});
Primary.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'email',
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'email',
  error: 'Valid email address',
};
