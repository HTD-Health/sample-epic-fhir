import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { Typography, TypographyType } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyType> = (args: any) => (
  <Typography {...args}>Lorem ipsum dolar sit amet.</Typography>
);

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  color: 'primary',
};
export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  color: 'primary',
};
export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  color: 'primary',
};
export const body = Template.bind({});
body.args = {
  variant: 'body',
  color: 'primary',
};
