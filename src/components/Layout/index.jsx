import React from 'react';
import { Display } from '@/components/Display';
import { Keypad } from '@/components/Keypad';
import { StyledLayoutContainer } from './styled';

export const Layout = () => {
  return (
    <StyledLayoutContainer>
      <Display />
      <Keypad />
    </StyledLayoutContainer>
  );
};
