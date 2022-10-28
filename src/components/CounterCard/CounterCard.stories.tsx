import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { IProps, CounterCard } from './CounterCard';

export default {
  title: 'Components/CounterCard',
  component: CounterCard,
} as Meta;

const Template: Story<IProps> = (args: any) => <CounterCard {...args} />;
export const Attacts = Template.bind({});
Attacts.args = {
  variant: 'attacks',
};

export const Duration = Template.bind({});
Duration.args = {
  variant: 'duration',
};

export const Severity = Template.bind({});
Severity.args = {
  variant: 'severity',
};
