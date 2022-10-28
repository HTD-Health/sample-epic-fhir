import { CounterCard } from 'components/CounterCard';
import { Flex } from 'components/Flex';
import React from 'react';

export const SummaryPage = () => (
  <Flex justifyContent="space-between">
    <CounterCard variant="attacks" value="12" />
    <CounterCard variant="duration" value="2h" />
    <CounterCard variant="severity" value="5.6" />
  </Flex>
);
