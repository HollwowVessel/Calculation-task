import React, { useReducer } from 'react';
import { Display } from 'components/Display/Functional';
import { Keypad } from 'components/Keypad/Functional';
import { StyledLayoutContainer } from '../styled';
import { func } from 'prop-types';
import { initialState, reducer } from './reducer';
import { logicOfCalculator } from '../../../utils/helpers';

export const Layout = ({ setHistoryItems }) => {
  const [displayState, dispatch] = useReducer(reducer, initialState);

  const handleValue = (e) => {
    let val = e.target.value;
    logicOfCalculator(val, displayState, dispatch, setHistoryItems);
  };

  return (
    <StyledLayoutContainer>
      <Display displayState={displayState} />
      <Keypad handleValue={handleValue} />
    </StyledLayoutContainer>
  );
};

Layout.propTypes = {
  setHistoryItems: func.isRequired,
};
