import React from 'react';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { theme } from 'config/theme';

export interface IProps {
  variant: 'name' | 'birth';
  label: string;
}

export const ComboHeader: React.FC<IProps> = ({ variant, label }) => (
  <Box>
    <Typography variant="body2" fontWeight={400} color="secondary">
      {variant === 'name' ? 'Patient name' : 'Date of birth'}
    </Typography>
    <Typography variant="h1" color="primary">
      {label}
    </Typography>
  </Box>
);
