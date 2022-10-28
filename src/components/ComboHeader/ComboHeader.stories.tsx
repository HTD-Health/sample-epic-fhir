import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ComboHeader, IProps } from './ComboHeader';

export default {
  title: 'Components/ComboHeader',
  component: ComboHeader,
} as Meta;

const Template: Story<IProps> = (args: any) => <ComboHeader {...args} />;

export const PatientName = Template.bind({});
PatientName.args = {
  variant: 'name',
  label: 'John Smith',
};

export const Birth = Template.bind({});
Birth.args = {
  variant: 'birth',
  label: '13/12/1990',
};
