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

export const getValue = (val, callback, number) => {
  if (val in numbers) {
    return val;
  }
  if (val === 'CE') {
    return callback(0);
  }

  if (val === 'C') {
    return callback(0);
  }

  if (val === 'CL') {
    calc.history = [];
    return callback(0);
  }
  if (op.indexOf(val) !== -1 && number[0] !== '(') {
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
  console.log(val, number.at(-1), number.at(-1) === ')' && val === '=');
  if (number.at(-1) === ')' && val === '=') {
    console.log(calculate(number));
    return calculate(number);
  }
};

let doEasyMath = (a, b, sing) => {
  switch (sing) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    case '%':
      return a % b;
    default:
      throw Error('Wrong sing');
  }
};

let solveProblem = (stack, sing) => {
  let a = stack.pop() ?? 0;
  let b = stack.pop() ?? 0;
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
