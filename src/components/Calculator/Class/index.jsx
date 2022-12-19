import { ControlPanel } from "components/ControlPanel/Class";
import { Display } from "components/Display/Class";
import { History } from "components/History/Class";
import { Keypad } from "components/Keypad/Functional";
import React from "react";
import { calc } from "utils/commandPattern";
import { getHistory, setHistory } from "utils/localStorage";
import { logicOfCalculator } from "utils/logicOfCalculator";

import { StyledCalculatorContainer, StyledLayoutContainer } from "../styled";

export class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      showHistory: false,
      historyItems: getHistory()?.reverse() || [],
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
      historyItems: getHistory().reverse(),
    }));
  };

  handleValue = (e) => {
    const val = e.target.value;

    const action = logicOfCalculator(val, this.state);

    switch (action.type) {
      case "clearAll": {
        return this.setState((prev) => ({
          ...prev,
          number: 0,
          expression: 0,
          operation: "",
        }));
      }
      case "addNumber": {
        return this.setState((prev) => ({
          ...prev,
          number: prev.number ? prev.number + action.payload : action.payload,
        }));
      }
      case "changeOperationWithoutParenthesis": {
        return this.setState((prev) => ({
          ...prev,
          operation: action.payload,
        }));
      }
      case "getOperation": {
        return (prev) => ({ ...prev, operation: action.payload });
      }
      case "swapDisplayValues": {
        return this.setState((prev) => ({
          operation: action.payload,
          number: 0,
          expression: prev.number,
        }));
      }

      case "getResult": {
        setHistory(calc.history);
        this.updateHistory();
        return this.setState({
          expression: 0,
          number: action.payload.number,
          operation: "",
        });
      }

      case "changeSign": {
        return this.setState((prev) => ({
          ...prev,
          number: -prev.number,
        }));
      }

      case "addDot": {
        return this.setState((prev) => ({
          ...prev,
          number: `${prev.number}.`,
        }));
      }

      case "fillExpression": {
        return this.setState((prev) => ({
          ...prev,
          number: prev.number + action.payload,
        }));
      }

      case "endExpression": {
        return this.setState((prev) => ({
          ...prev,
          number: `${prev.number})`,
        }));
      }

      case "startExpression": {
        return this.setState((prev) => ({
          ...prev,
          number: prev.number ? `${prev.number}(` : "(",
        }));
      }
      case "clearExpression": {
        const num = String(this.state.number).substring(
          0,
          String(this.state.number).length - 1
        );
        return this.setState((prev) => ({
          ...prev,
          number: +num ? num : 0,
        }));
      }
      case "getResultWithoutEqualSign": {
        setHistory(calc.history);
        this.updateHistory();
        return this.setState((prev) => ({
          ...prev,
          operation: action.payload.operation,
          expression: action.payload.expression,
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
      <StyledCalculatorContainer>
        <StyledLayoutContainer>
          <Display displayState={this.state} />
          <Keypad handleValue={this.handleValue} />
        </StyledLayoutContainer>
        <ControlPanel handleHistory={this.handleHistory} />
        {showHistory && <History id="history" historyItems={historyItems} />}
      </StyledCalculatorContainer>
    );
  }
}
