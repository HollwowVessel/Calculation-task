import { numbers } from 'constants/calculator';
import { op } from 'constants/calculator';
import { calc } from './commandPattern';
import {
  addCommand,
  divCommand,
  modCommand,
  mulCommand,
  subCommand,
} from './commands';

export const getValue = (val, callback) => {
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
