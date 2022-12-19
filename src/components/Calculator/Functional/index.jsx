import { ControlPanel } from "components/ControlPanel/Functional";
import { Display } from "components/Display/Class";
import { History } from "components/History/Functional";
import { Keypad } from "components/Keypad/Functional";
import React, { useReducer, useState } from "react";
import { getHistory } from "utils/localStorage";
import { logicOfCalculator } from "utils/logicOfCalculator";
import { initialState, reducer } from "utils/reducer";

import { StyledCalculatorContainer, StyledLayoutContainer } from "../styled";

export function Calculator() {
  const [historyItems, setHistoryItems] = useState(
    getHistory()?.reverse() || []
  );

  const [displayState, dispatch] = useReducer(reducer, initialState);

  const handleValue = (e) => {
    const val = e.target.value;
    dispatch(logicOfCalculator(val, displayState, setHistoryItems));
  };

  const [showHistory, setShowHistory] = useState(false);

  const handleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <StyledCalculatorContainer>
      <StyledLayoutContainer>
        <Display displayState={displayState} />
        <Keypad handleValue={handleValue} />
      </StyledLayoutContainer>
      <ControlPanel handleHistory={handleHistory} />
      {showHistory && <History historyItems={historyItems} />}
    </StyledCalculatorContainer>
  );
}
