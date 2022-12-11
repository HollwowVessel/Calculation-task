import React from 'react';

import { History } from '@/components/History';
import { Layout } from '@/components/Layout';
import { StyledCalculatorContainer } from './styled';

export const Calculator = () => {
  return (
    <StyledCalculatorContainer>
      <Layout />
      <History />
    </StyledCalculatorContainer>
  );
};
