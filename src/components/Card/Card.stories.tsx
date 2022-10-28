import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { Card, IProps } from './Card';
import { Typography } from 'components/Typography';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<IProps> = (args: any) => (
  <Card {...args}>
    <Typography variant="h1" color="primary">
      Hello world.
    </Typography>
  </Card>
);

export const Primary = Template.bind({});
