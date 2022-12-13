import { getHistory, setHistory } from './localStorage';

class Calculator {
  constructor() {
    this.value = 0;
    this.history = getHistory() || [];
  }

  executeCommand(command) {
    const historyElement = [command.value, command.operation, this.value];
    this.value = Math.round(command.execute(this.value) * 1e3) / 1e3;
    this.history.push([...historyElement, '=', this.value]);
    setHistory(this.history);
  }
}

export const calc = new Calculator();
export const calcForExp = new Calculator();
