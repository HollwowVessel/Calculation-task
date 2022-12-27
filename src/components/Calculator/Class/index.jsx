import { ControlPanel } from "components/ControlPanel/Class";
import { Display } from "components/Display/Class";
import { History } from "components/History/Class";
import { Keypad } from "components/Keypad/Functional";
import { reducerNames } from "constants/reducer";
import React from "react";
import { calc } from "utils/commandPattern";
import { getHistory, setHistory } from "utils/localStorage";
import { logicOfCalculator } from "utils/logicOfCalculator";

import { CalculatorContainer, LayoutContainer } from "../styled";

const {
  addDot,
  addNumber,
  changeOperationWithoutParenthesis,
  changeSign,
  clearAll,
  clearExpression,
  endExpression,
  fillExpression,
  getOperation,
  getResult,
  getResultWithoutEqualSign,
  startExpression,
  swapDisplayValues,
} = { ...reducerNames };

export class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      showHistory: false,
      historyItems: getHistory() || [],
      number: 0,
      expression: 0,
      operation: "",
    };
  }

  handleHistory = () => {
    this.setState((prev) => ({ ...prev, showHistory: !prev.showHistory }));
  };

  updateHistory = () => {
    this.setState((prev) => ({
      ...prev,
      historyItems: getHistory(),
    }));
  };

  handleValue = (e) => {
    const val = e.target.value;

    const action = logicOfCalculator(val, this.state);
    const { type, payload } = action;
    switch (type) {
      case clearAll: {
        return this.setState((prev) => ({
          ...prev,
          number: 0,
          expression: 0,
          operation: "",
        }));
      }
      case addNumber: {
        return this.setState((prev) => ({
          ...prev,
          number: prev.number ? prev.number + payload : payload,
        }));
      }
      case changeOperationWithoutParenthesis: {
        return this.setState((prev) => ({
          ...prev,
          operation: payload,
        }));
      }
      case getOperation: {
        return (prev) => ({ ...prev, operation: payload });
      }
      case swapDisplayValues: {
        return this.setState((prev) => ({
          operation: payload,
          number: 0,
          expression: prev.number,
        }));
      }

      case getResult: {
        const history = getHistory() ? getHistory() : [[]];
        setHistory([calc.history.at(-1), ...history]);

        this.updateHistory();
        return this.setState({
          expression: 0,
          number: payload.number,
          operation: "",
        });
      }

      case changeSign: {
        return this.setState((prev) => ({
          ...prev,
          number: -prev.number,
        }));
      }

      case addDot: {
        return this.setState((prev) => ({
          ...prev,
          number: `${prev.number}.`,
        }));
      }

      case fillExpression: {
        return this.setState((prev) => ({
          ...prev,
          number: prev.number + payload,
        }));
      }

      case endExpression: {
        return this.setState((prev) => ({
          ...prev,
          number: `${prev.number})`,
        }));
      }

      case startExpression: {
        return this.setState((prev) => ({
          ...prev,
          number: prev.number ? `${prev.number}(` : "(",
        }));
      }
      case clearExpression: {
        const num = String(this.state.number).substring(
          0,
          String(this.state.number).length - 1
        );
        return this.setState((prev) => ({
          ...prev,
          number: +num ? num : 0,
        }));
      }
      case getResultWithoutEqualSign: {
        const history = getHistory() ? getHistory() : [[]];
        const { operation, expression } = payload;
        setHistory([calc.history.at(-1), ...history]);
        this.updateHistory();
        return this.setState((prev) => ({
          ...prev,
          operation,
          expression,
          number: 0,
        }));
      }
      default: {
        return null;
      }
    }
  };

  render() {
    const { showHistory, historyItems } = this.state;
    return (
      <CalculatorContainer>
        <LayoutContainer>
          <Display displayState={this.state} />
          <Keypad handleValue={this.handleValue} />
        </LayoutContainer>
        <ControlPanel handleHistory={this.handleHistory} />
        {showHistory && <History id="history" historyItems={historyItems} />}
      </CalculatorContainer>
    );
  }
}
