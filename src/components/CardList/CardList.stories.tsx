import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import { CardList, IProps } from './CardList';

export default {
  title: 'Components/CardList',
  component: CardList,
} as Meta;

const Template: Story<IProps> = (args: any) => <CardList {...args} />;

export const Single = Template.bind({});
Single.args = {
  value: 'Streching - Scalene and Corner Pectoralis',
};

export const Multiple = Template.bind({});
Multiple.args = {
  value: 'Qulipta - daily 1 tablet',
  list: [
    'Class: CGRP antagonist (Calcitonin Gene-Related Peptide Receptor Antagonist)',
    'Dosage: 10, 30, 60 mg',
    'Benefits: Migraine Prevention',
    'Side Effects: Nausea, Constipation, Tatigue, Flu-like symptoms',
  ],
};
