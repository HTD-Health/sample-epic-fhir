import { CardList } from 'components/CardList';
import { Box } from 'components/Box';
import React from 'react';
import { IProps } from 'components/CardList/CardList';

const CarePlanList: IProps[] = [
  {
    value: 'Streching - Scalene and Corner Pectoralis',
  },
  {
    value: 'Strength - Chin tucks',
  },
  {
    value: 'Mobilization - Chin Tuck and SNAG',
  },
  {
    value: 'Qulipta - daily 1 tablet',
    list: [
      'Class: CGRP antagonist (Calcitonin Gene-Related Peptide Receptor Antagonist)',
      'Dosage: 10, 30, 60 mg',
      'Benefits: Migraine Prevention',
      'Side Effects: Nausea, Constipation, Tatigue, Flu-like symptoms',
    ],
  },
];

export const CarePlanPage = () => {
  return (
    <>
      {CarePlanList.map((item) => (
        <Box mb={6}>
          {item.list ? <CardList {...item} /> : <CardList value={item.value} />}
        </Box>
      ))}
    </>
  );
};
