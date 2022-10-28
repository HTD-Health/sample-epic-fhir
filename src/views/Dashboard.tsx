import React from 'react';
import { Box } from 'components/Box';
import { Flex } from 'components/Flex';
import { ComboHeader } from 'components/ComboHeader';
import { CounterCard } from 'components/CounterCard';
import { Tabs } from 'components/Tabs';

export const DashboardPage = () => {
  return (
    <Box m={12}>
      <Flex>
        <Box mr={14}>
          <ComboHeader variant="name" label={'unknow name'} />
        </Box>
        <ComboHeader variant="birth" label={'data'} />
      </Flex>

      <Box mt={12}>
        <Tabs />
      </Box>
    </Box>
  );
};
