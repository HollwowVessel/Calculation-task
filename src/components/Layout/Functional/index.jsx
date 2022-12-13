import React, { useState } from 'react';
import { Display } from 'components/Display/Functional';
import { Keypad } from 'components/Keypad/Functional';
import { StyledLayoutContainer } from '../styled';
import { getValue, count } from 'utils/helpers';
import { numbers, op } from 'constants/calculator';
import { calc } from 'utils/commandPattern';
import { func } from 'prop-types';
import { setHistory } from 'utils/localStorage';

export const Layout = ({ setHistoryItems }) => {
  const [number, setNumber] = useState(0);
  const [expression, setExpression] = useState(0);
  const [operation, setOperation] = useState('');

  const clearDisplayValues = () => {
    setNumber(0);
    setExpression(0);
    setOperation('');
  };

  const handleValue = (e) => {
    let val = e.target.value;
    if (val in numbers) {
      setNumber((prev) => (prev ? prev + val : val));
      return;
    }

    if (numbers.indexOf(val) === -1 && op.indexOf(val) === -1) {
      if (val === 'CE') {
        getValue(val, setNumber);
      }
      if (val === 'C') {
        getValue(val, clearDisplayValues);
      }
    }

    if (op.indexOf(val) !== -1 && !operation && number[0] !== '(') {
      setOperation(val);
      setExpression(number);
      setNumber(0);
    }

    if (op.indexOf(val) !== -1 && operation && number[0] !== '(') {
      setOperation(val);
    }

    if (val === '=') {
      console.log(val);
      if (number[0] === '(') {
        console.log(number);
        const res = getValue(val, 0, number);
        console.log(res);
        const command = getValue(operation, 0, res);
        command.value = expression;
        calc.value = res;
        calc.executeCommand(command);
        calc.history[calc.history.length - 1] = [
          expression,
          operation,
          number,
          '=',
          calc.value,
        ];
        setExpression(calc.history.at(-1).join(' '));
        setNumber(calc.value);
        setHistoryItems((prev) => {
          const newHistory = [calc.history.at(-1), ...prev];
          setHistory(newHistory);
          return newHistory;
        });
        setOperation('');
        return;
      }
      const command = getValue(operation, 0, expression);
      command.value = expression;
      calc.value = number;
      calc.executeCommand(command);

      setNumber(calc.value);
      setExpression(calc.history.at(-1).join(' '));
      setHistoryItems((prev) => {
        const newHistory = [calc.history.at(-1), ...prev];
        setHistory(newHistory);
        return newHistory;
      });
      setOperation('');
    }

    if (val === '.' && String(number).indexOf('.') === -1) {
      setNumber((prev) => prev + '.');
    }

    if (val === '+/-') {
      setNumber((prev) => -prev);
    }
    console.log(val);

    if (val === '(' || op.indexOf(val) !== -1) {
      if (number[0] === '(' && val !== '(') {
        if (op.indexOf(number.at(-1)) === -1) {
          setNumber((prev) => prev + val);
        }
      } else if (
        (number[0] !== '(' && val === '(') ||
        (op.indexOf(number.at(-1)) !== -1 && val === '(')
      ) {
        setNumber((prev) => (prev ? prev + '(' : '('));
      }
    }

    if (val === ')' && count(number, '(') !== count(number, ')')) {
      setNumber((prev) => prev + ')');
    }
  };

  return (
    <StyledLayoutContainer>
      <Display number={number} expression={expression} operation={operation} />
      <Keypad handleValue={handleValue} />
    </StyledLayoutContainer>
  );
};

Layout.propTypes = {
  setHistoryItems: func.isRequired,
};
