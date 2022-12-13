import { numbers } from 'constants/calculator';
import { op } from 'constants/calculator';
import { calc, calcForExp } from './commandPattern';
import {
  addCommand,
  divCommand,
  modCommand,
  mulCommand,
  subCommand,
} from './commands';
import { setHistory } from './localStorage';

export const logicOfCalculator = (val, displayState, setHistoryItems) => {
  const { number, expression, operation } = displayState;

  if (val in numbers) {
    if (!number.length && val === '0') return { type: '' };
    return { type: 'addNumber', payload: val };
  }

  if (numbers.indexOf(val) === -1 && op.indexOf(val) === -1) {
    if (val === 'CE') {
      return { type: 'clearExpression' };
    }
    if (val === 'C') {
      calc.value = 0;
      return { type: 'clearAll' };
    }
  }

  if (
    op.indexOf(val) !== -1 &&
    !operation &&
    (number[0] !== '(' || number.at(-1) === ')')
  ) {
    return { type: 'swapDisplayValues', payload: val };
  }

  if (op.indexOf(val) !== -1 && operation && number[0] !== '(') {
    return { type: 'changeOperationWithoutParenthesis', payload: val };
  }

  if (val === '.' && String(number).indexOf('.') === -1) {
    return { type: 'addDot' };
  }

  if (val === '+/-' && number[0] !== '(') {
    return { type: 'changeSign' };
  }

  if (val === '(' || op.indexOf(val) !== -1) {
    if (number[0] === '(' && val !== '(') {
      if (op.indexOf(String(number).at(-1)) === -1 && number.at(-1) !== '(') {
        return { type: 'fillExpression', payload: val };
      }
    } else if (
      (number[0] !== '(' && val === '(') ||
      op.indexOf(number.at(-1)) !== -1
    ) {
      if (number.length === 1 && number.at(-1) !== 0) {
        return;
      }

      return { type: 'startExpression' };
    }
  }

  if (
    val === ')' &&
    count(number, '(') !== count(number, ')') &&
    op.indexOf(number.at(-1)) === -1 &&
    number.at(-1) !== '('
  ) {
    return { type: 'endExpression' };
  }

  if (val === '=') {
    console.log(calc.value);
    if (number[0] === '(' && count(number, '(') !== count(number, ')')) {
      return;
    }
    if (number[0] === '(' || expression[0] === '(') {
      const command = getCommand(operation);
      let res = 0;
      if (number[0] === '(' && expression[0] !== '(') {
        res = calculateExpression(val, number);
        command.value = expression;
      } else if (expression[0] === '(' && number[0] !== '(') {
        res = calculateExpression(val, expression);
        command.value = number;
      } else {
        res = calculateExpression(val, number);
        command.value = calculateExpression(val, expression);
      }
      console.log(res, command.value);
      calc.value = res;
      calc.executeCommand(command);
      calc.history[calc.history.length - 1] = [
        expression,
        operation,
        number,
        '=',
        calc.value,
      ];
    } else {
      const command = getCommand(operation, expression);
      command.value = expression;
      console.log(command.value);
      calc.value = number;
      calc.executeCommand(command);
    }

    if (setHistoryItems) {
      setHistoryItems((prev) => {
        const newHistory = [calc.history.at(-1), ...prev];
        setHistory(newHistory);
        return newHistory;
      });
    }

    return {
      type: 'getResult',
      payload: {
        expression: calc.history.at(-1).join(' '),
        number: calc.value,
      },
    };
  }
  return { type: '' };
};

const getCommand = (val) => {
  if (op.indexOf(val) !== -1) {
    if (val === '+') {
      return addCommand;
    }
    if (val === '-') {
      return subCommand;
    }
    if (val === '*') {
      return mulCommand;
    }
    if (val === '/') {
      return divCommand;
    }
    if (val === '%') {
      return modCommand;
    }
  }
};

const calculateExpression = (val, number) => {
  if (number.at(-1) === ')' && val === '=') {
    console.log(calculate(number));
    return calculate(number);
  }
};

let doEasyMath = (a, b, sing) => {
  calcForExp.value = sing === '-' ? +b : +a;
  const command = getCommand(sing);
  command.value = sing === '-' ? +a : +b;
  calcForExp.executeCommand(command);
  return calcForExp.value;
};

let solveProblem = (stack, sing) => {
  let a = stack.pop() ?? 0;
  let b = stack.pop() ?? 0;
  console.log(a, b);
  stack.push(doEasyMath(b, a, sing));
};

let signPriority = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 3,
};

const calculate = (string) => {
  string = `${string.replace(/\s/g, '')})`;

  if (!string.length) throw Error('String is Empty');

  if (string.match(/^((\d*\.?\d*)([()+-/*%]))*(\d*\.?\d*)$/) === null)
    throw Error('String Error!');

  let numberStack = [];
  let singStack = [];

  for (let i = 0; i < string.length; i++) {
    let curElement = string[i];
    let curElementPriority = signPriority[curElement];
    if (curElementPriority) {
      if (
        signPriority[singStack.at(-1)] >= curElementPriority &&
        singStack.length
      ) {
        let localSing = singStack.pop();
        while (signPriority[localSing] >= curElementPriority) {
          solveProblem(numberStack, localSing, singStack);
          localSing = singStack.pop();
        }
        if (localSing) singStack.push(localSing);
        singStack.push(curElement);
      } else singStack.push(curElement);
    } else if (curElement === '(') singStack.push(curElement);
    else if (curElement === ')') {
      let localSing = singStack.pop();
      while (localSing !== '(' && localSing?.length) {
        solveProblem(numberStack, localSing, singStack);
        localSing = singStack.pop();
        console.log(singStack, numberStack);
      }
    } else {
      let number = string.substring(i).match(/[0-9]+/);
      if (number?.index === 0) {
        i += number[0].length - 1;
        numberStack.push(Number(number));
      }
    }
  }

  return numberStack.pop();
};

export const count = (string, ch) => {
  let q = 0;
  for (let i of string) {
    if (i === ch) {
      q++;
    }
  }
  return q;
};
