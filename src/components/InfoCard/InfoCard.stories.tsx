import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { InfoCard, IProps } from './InfoCard';

export default {
  title: 'Components/InfoCard',
  component: InfoCard,
} as Meta;

const Template: Story<IProps> = (args: any) => <InfoCard {...args} />;

export const InfoWithTitle = Template.bind({});
InfoWithTitle.args = {
  variant: 'info',
  title: 'Info',
  desc: 'Brief messages about app processes',
};
export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  desc: 'Brief messages about app processes',
};

export const SuccesWithTitle = Template.bind({});
SuccesWithTitle.args = {
  variant: 'success',
  title: 'Success',
  desc: 'Brief messages about app processes',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  desc: 'Brief messages about app processes',
};

export const ErrorWithTitle = Template.bind({});
ErrorWithTitle.args = {
  variant: 'error',
  title: 'Error',
  desc: 'Brief messages about app processes',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  desc: 'Brief messages about app processes',
};
