import { PRECISION } from "constants/calculator";

class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    const historyElement = [command.value, command.operation, this.value];
    this.value =
      Math.round(command.execute(this.value) * PRECISION) / PRECISION;
    this.history.push([...historyElement, "=", this.value]);
  }
}

export const calc = new Calculator();
export const calcForExp = new Calculator();
