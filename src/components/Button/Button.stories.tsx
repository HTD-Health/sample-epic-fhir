import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-back-outline.svg';
import { ReactComponent as MagnifierIcon } from 'assets/icons/magnifier.svg';

import { Button, IButton } from './Button';
import Spinner from 'react-spinkit';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButton> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'secondary Button',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: 'secondary',
  label: 'Button',
  icon: <ArrowIcon />,
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: 'secondary',
  label: 'Button',
  positionIcon: 'right',
  icon: <MagnifierIcon />,
};

export const WithCenterIcon = Template.bind({});
WithCenterIcon.args = {
  variant: 'secondary',
  positionIcon: 'center',
  icon: <Spinner name="ball-clip-rotate" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Button',
  disabled: true,
  icon: <ArrowIcon />,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  variant: 'secondary',
  label: 'Button',
  disabled: true,
  icon: <ArrowIcon />,
};
