import React, { useState } from 'react';
import { Display } from 'components/Display';
import { Keypad } from 'components/Keypad';
import { StyledLayoutContainer } from './styled';
import { getValue } from 'utils/helpers';
import { numbers, op } from 'constants/calculator';
import { calc } from '../../utils/commandPattern';

export const Layout = ({ setHistoryItems }) => {
  const [number, setNumber] = useState(0);
  const [expression, setExpression] = useState(0);
  const [operation, setOperation] = useState('');

  const clearDisplayValues = () => {
    setNumber(0);
    setExpression(0);
    setOperation('');
  };

  const clearAll = () => {
    setNumber(0);
    setExpression(0);
    setOperation('');
    setHistoryItems([]);
  };

  const handleValue = (e) => {
    let val = e.target.value;
    if (val in numbers) {
      setNumber((prev) => (prev ? prev + val : val));
      return;
    }

    if (numbers.indexOf(val) === -1 && op.indexOf(val) === -1) {
      if (val === 'CL') {
        getValue(val, clearAll);
      }
      if (val === 'CE') {
        getValue(val, setNumber);
      }
      if (val === 'C') {
        getValue(val, clearDisplayValues);
      }
    }

    if (op.indexOf(val) !== -1 && !operation) {
      setOperation(val);
      setExpression(number);
      setNumber(0);
    }

    if (val === '=') {
      const command = getValue(operation);
      command.value = expression;
      calc.value = number;
      calc.executeCommand(command);

      setNumber(calc.value);
      setExpression(calc.history.at(-1).join(' '));
      setHistoryItems((prev) => [...prev, calc.history.at(-1)]);
      setOperation('');
    }

    if (val === '.') {
      setNumber((prev) => prev + '.');
    }

    if (val === '+/-') {
      setNumber((prev) => -prev);
    }
  };

  return (
    <StyledLayoutContainer>
      <Display number={number} expression={expression} />
      <Keypad handleValue={handleValue} />
    </StyledLayoutContainer>
  );
};
