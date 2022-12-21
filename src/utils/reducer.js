import {
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
} from "constants/reducer";

export const reducer = (state, action) => {
  const { type, payload } = action;
  const { expression, number, operation } =
    typeof payload === "object" ? payload : initialState;
  switch (type) {
    case clearAll: {
      return { number: 0, expression: 0, operation: "" };
    }
    case addNumber: {
      return {
        ...state,
        number: state.number ? state.number + payload : payload,
      };
    }
    case changeOperationWithoutParenthesis: {
      return {
        ...state,
        operation: payload,
      };
    }
    case getOperation: {
      return {
        ...state,
        operation: payload,
      };
    }
    case swapDisplayValues: {
      return {
        operation: payload,
        number: 0,
        expression: state.number,
      };
    }

    case getResult: {
      return {
        expression: 0,

        number: isNaN(number) ? "Error" : number,
        operation: operation || "",
      };
    }

    case changeSign: {
      return { ...state, number: -state.number };
    }

    case addDot: {
      return { ...state, number: `${state.number}.` };
    }

    case fillExpression: {
      return { ...state, number: state.number + payload };
    }

    case endExpression: {
      return { ...state, number: `${state.number})` };
    }

    case startExpression: {
      return { ...state, number: state.number ? `${state.number}(` : "(" };
    }
    case clearExpression: {
      const num = String(state.number).substring(
        0,
        String(state.number).length - 1
      );
      return {
        ...state,
        number: +num ? num : 0,
      };
    }

    case getResultWithoutEqualSign: {
      return {
        operation,
        expression,
        number: 0,
      };
    }

    default: {
      return state;
    }
  }
};

export const initialState = { number: 0, expression: 0, operation: "" };
