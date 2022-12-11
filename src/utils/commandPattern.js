class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    const historyElement = [command.value, command.operation, this.value];
    this.value = command.execute(this.value);
    this.history.push([...historyElement, '=', this.value]);
  }
}

export const calc = new Calculator();
