import React from 'react';
import styled from 'styled-components';
import { Card } from 'components/Card';
import { ReactComponent as HeadacheIcon } from 'assets/icons/headache.svg';
import { ReactComponent as TimeIcon } from 'assets/icons/time.svg';
import { ReactComponent as StatsChartIcon } from 'assets/icons/statsChart.svg';
import { Typography } from 'components/Typography';
import { Flex } from 'components/Flex';
import { Box } from 'components/Box';

export interface IProps {
  variant: 'attacks' | 'duration' | 'severity';
  value: string;
}
interface IWrapperIcon {
  variant: string;
}

const WrapperIcon = styled.div<IWrapperIcon>`
  ${({ variant }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 59px;
    height: 59px;
    border-radius: 12px;
    background-color: ${variant};
    border: 1px solid ${variant};
  `}
`;
const StyledCard = styled(Card)`
  width: 32%;
`;
const StyledTypography = styled(Typography)`
  font-size: 32px;
  line-height: 39px;
`;

export const CounterCard: React.FC<IProps> = ({ variant, value }) => {
  const generateVariantIcon = () => {
    switch (variant) {
      case 'attacks':
        return <HeadacheIcon />;
      case 'duration':
        return <TimeIcon />;
      case 'severity':
        return <StatsChartIcon />;
    }
  };

  const generateVariantColorIcon = (): string => {
    switch (variant) {
      case 'attacks':
        return '#FBF0F3';
      case 'duration':
        return '#DAE8E5';
      case 'severity':
        return '#F7EAE6';
    }
  };

  const generateVariantSubheading = (): string => {
    switch (variant) {
      case 'attacks':
        return 'Attacks in this peroid';
      case 'duration':
        return 'Average duration';
      case 'severity':
        return 'Average max severity';
    }
  };

  return (
    <StyledCard>
      <Flex>
        <WrapperIcon variant={generateVariantColorIcon()}>
          {generateVariantIcon()}
        </WrapperIcon>
        <Box ml={4}>
          <StyledTypography variant="h1" color="primary">
            {value}
          </StyledTypography>
          <Typography variant="body2" color="secondary">
            {generateVariantSubheading()}
          </Typography>
        </Box>
      </Flex>
    </StyledCard>
  );
};
