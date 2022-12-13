import { DIV_MUL_NEUTRAL, SUB_ADD_NEUTRAL } from 'constants/calculator';

class Command {
  constructor(value, callback, op) {
    this.value = value;
    this.operation = op;
    this.callback = callback;
  }
  execute(currentValue) {
    return this.callback(this.value, currentValue);
  }
}

const add = (a, b) => +a + +b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const sub = (a, b) => a - b;
const mod = (a, b) => a % b;

const addCommand = new Command(SUB_ADD_NEUTRAL, add, '+');
const mulCommand = new Command(DIV_MUL_NEUTRAL, mul, '*');
const subCommand = new Command(SUB_ADD_NEUTRAL, sub, '-');
const divCommand = new Command(DIV_MUL_NEUTRAL, div, '/');
const modCommand = new Command(SUB_ADD_NEUTRAL, mod, '%');

export { addCommand, subCommand, mulCommand, divCommand, modCommand };
