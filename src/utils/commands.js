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

const DIV_MUL_NEUTRAL = 1;
const SUB_ADD_NEUTRAL = 0;

const add = (a, b) => a + b;
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
