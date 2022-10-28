import React, { useState } from 'react';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import styled from 'styled-components';
import { DashboardPage } from 'views/Dashboard';
import { SummaryPage } from 'views/Summary';
import { CarePlanPage } from 'views/CarePlan';

interface IProps {
  disabled?: boolean;
}

const Hr = styled.div`
  ${({ theme }) => `
  display: block;
    width: 100%;
    height: 1px;
    background-color: #DCDEE1;
    margin-top: 11px;
  `}
`;

const tabsList = [
  {
    label: 'Summary',
    id: 1,
    component: <SummaryPage />,
  },
  {
    label: 'Reaports',
    id: 2,
    component: (
      <Typography variant="h1" color="primary">
        raports
      </Typography>
    ),
  },
  {
    label: 'Care Plan',
    id: 3,
    component: <CarePlanPage />,
  },
];

export const Tabs: React.FC<IProps> = ({ disabled }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <>
      <Flex>
        {tabsList.map((tab) => (
          <Box pr={10} key={tab.id}>
            <Typography
              variant="body"
              color="secondary"
              onClick={() => {
                if (!disabled) setIsActive(tab.id);
              }}
            >
              {tab.label}
            </Typography>
          </Box>
        ))}
      </Flex>
      <Hr />

      <Box mt={8}>
        {tabsList.map((tab) => (
          <>{isActive === tab.id && tab.component}</>
        ))}
      </Box>
    </>
  );
};
