import { numbers, op, signPriority } from "constants/calculator";
import { calc, calcForExp } from "utils/commandPattern";
import {
  addCommand,
  divCommand,
  modCommand,
  mulCommand,
  subCommand,
} from "utils/commands";
import { getHistory, setHistory } from "utils/localStorage";

export const addNumber = (number, val) => {
  if (!(numbers.indexOf(+val) !== -1)) return null;
  if (number && String(number).at(-1) === ")") return { type: "" };
  if (!number.length && val === "0") return { type: "" };
  return { type: "addNumber", payload: val };
};

export const getResultWithoutEqualSign = ({
  val,
  number,
  expression,
  operation,
  setHistoryItems,
}) => {
  if (op.indexOf(val) !== -1 && operation && number[0] !== "(") {
    calc.value = expression;
    const command = getCommand(operation);
    command.value = number;
    calc.executeCommand(command);
    calc.history.push([
      String(expression),
      operation,
      String(number),
      "=",
      String(calc.value),
    ]);
    if (setHistoryItems) {
      setHistoryItems(() => {
        const history = getHistory() ? getHistory() : [[]];
        setHistory([calc.history.at(-1), ...history]);
        const newHistory = getHistory();
        return newHistory;
      });
    }
    return {
      type: "getResultWithoutEqualSign",
      payload: {
        number: 0,
        expression: calc.value,
        operation: val,
      },
    };
  }
  return null;
};

export const clearValues = (val, number) => {
  if (numbers.indexOf(val) === -1 && op.indexOf(val) === -1 && val !== "=") {
    if (val === "CE") {
      return {
        type: "clearExpression",
        payload: {
          number,
        },
      };
    }
    if (val === "C") {
      calc.value = 0;
      return { type: "clearAll" };
    }
  }
  return null;
};

export const wrongOperations = (val, number, operation) => {
  const rightParenthesis = count(number, "(");
  const leftParenthesis = count(number, ")");
  if (
    rightParenthesis !== 0 &&
    rightParenthesis === leftParenthesis &&
    val !== "=" &&
    operation
  ) {
    return null;
  }

  if (val === "(" && numbers.indexOf(String(number).at(-1)) !== -1) {
    return null;
  }
  return "ok";
};

export const swapDisplayValues = (val, operation, number) => {
  if (
    op.indexOf(val) !== -1 &&
    !operation &&
    (number[0] !== "(" || String(number).at(-1) === ")")
  ) {
    return { type: "swapDisplayValues", payload: val };
  }
  return null;
};

export const easyOperations = (val, number) => {
  if (val === "." && String(number).indexOf(".") === -1) {
    return { type: "addDot" };
  }

  if (val === "+/-" && number[0] !== "(") {
    return { type: "changeSign" };
  }
  return null;
};

export const startExpression = (val, number) => {
  if (val === "(" || op.indexOf(val) !== -1) {
    if (number[0] === "(" && val !== "(") {
      if (
        op.indexOf(String(number).at(-1)) === -1 &&
        String(number).at(-1) !== "("
      ) {
        return { type: "fillExpression", payload: val };
      }
    } else if (
      (number[0] !== "(" && val === "(") ||
      op.indexOf(String(number).at(-1)) !== -1
    ) {
      if (number.length === 1 && String(number).at(-1) !== 0) {
        return { type: "" };
      }

      return { type: "startExpression" };
    }
  }
  return null;
};

export const getResult = ({
  val,
  number,
  expression,
  operation,
  setHistoryItems,
}) => {
  if (val === "=") {
    if (number[0] === "(" && count(number, "(") !== count(number, ")")) {
      return { type: "" };
    }

    if (number[0] === "(" || expression[0] === "(") {
      const command = getCommand(operation);
      let res = 0;
      if (number[0] === "(" && expression[0] !== "(") {
        res = calculateExpression(val, number);
        command.value = expression;
      } else if (expression[0] === "(" && number[0] !== "(") {
        res = calculateExpression(val, expression);
        command.value = number;
      } else {
        res = calculateExpression(val, number);
        command.value = calculateExpression(val, expression);
      }

      calc.value = res;
      calc.executeCommand(command);
    } else {
      const command = getCommand(operation, expression);
      command.value = expression;
      calc.value = number;
      calc.executeCommand(command);
    }
    if (isNaN(calc.value)) {
      return {
        type: "getResult",
        payload: {
          number: "Error",
        },
      };
    }

    calc.history.push([
      String(expression),
      operation,
      String(number),
      "=",
      String(calc.value),
    ]);
    if (setHistoryItems) {
      const history = getHistory() ? getHistory() : [[]];
      setHistory([calc.history.at(-1), ...history]);
      setHistoryItems(() => {
        const newHistory = getHistory();
        return newHistory;
      });
    }
    return {
      type: "getResult",
      payload: {
        number: calc.value,
      },
    };
  }
  return null;
};

export const endExpression = (val, number) => {
  if (
    val === ")" &&
    count(number, "(") !== count(number, ")") &&
    op.indexOf(String(number).at(-1)) === -1 &&
    String(number).at(-1) !== "(" &&
    numbers.indexOf(String(number).at(-1)) === -1
  ) {
    return { type: "endExpression" };
  }
  return null;
};

export const count = (string, ch) => {
  let q = 0;
  for (const i of String(string)) {
    if (i === ch) {
      q++;
    }
  }
  return q;
};

const getCommand = (val) => {
  if (op.indexOf(val) !== -1) {
    if (val === "+") {
      return addCommand;
    }
    if (val === "-") {
      return subCommand;
    }
    if (val === "*") {
      return mulCommand;
    }
    if (val === "/") {
      return divCommand;
    }
    if (val === "%") {
      return modCommand;
    }
  }
  return null;
};

const calculate = (string) => {
  string = `${string.replace(/\s/g, "")})`;

  if (!string.length) throw Error("String is Empty");

  if (string.match(/^((\d*\.?\d*)([()+-/*%]))*(\d*\.?\d*)$/) === null)
    throw Error("String Error!");

  const numberStack = [];
  const singStack = [];

  for (let i = 0; i < string.length; i++) {
    const curElement = string[i];

    const curElementPriority = signPriority[curElement];
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
    } else if (curElement === "(") singStack.push(curElement);
    else if (curElement === ")") {
      let localSing = singStack.pop();
      while (localSing !== "(" && localSing?.length) {
        solveProblem(numberStack, localSing, singStack);
        localSing = singStack.pop();
      }
    } else {
      const number = string.substring(i).match(/[0-9]+/);
      if (number?.index === 0) {
        i += number[0].length - 1;
        numberStack.push(Number(number));
      }
    }
  }

  return numberStack.pop();
};

const calculateExpression = (val, number) => {
  if (String(number).at(-1) === ")" && val === "=") {
    return calculate(number);
  }
  return null;
};

const doEasyMath = (a, b, sing) => {
  calcForExp.value = sing === "-" ? +b : +a;
  const command = getCommand(sing);
  command.value = sing === "-" ? +a : +b;
  calcForExp.executeCommand(command);
  return calcForExp.value;
};

const solveProblem = (stack, sing) => {
  const a = stack.pop() ?? 0;
  const b = stack.pop() ?? 0;

  stack.push(doEasyMath(b, a, sing));
};
