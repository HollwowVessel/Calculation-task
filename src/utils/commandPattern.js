class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.history.push([command.value, command.operation, this.value]);
    this.value = command.execute(this.value);
  }
}

const calc = new Calculator();

export { calc };
