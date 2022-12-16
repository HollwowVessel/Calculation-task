import {
  clearAll,
  addDot,
  addNumber,
  changeOperationWithoutParenthesis,
  getOperation,
  swapDisplayValues,
  getResult,
  changeSign,
  clearExpression,
  endExpression,
  fillExpression,
  startExpression,
  getResultWithoutEqualSign,
} from 'constants/reducer';

export const reducer = function (state, action) {
  const { type, payload } = action;
  const { expression, number, operation } =
    typeof payload === 'object' ? payload : initialState;
  switch (type) {
    case clearAll: {
      return { number: 0, expression: 0, operation: '' };
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
        expression: expression,
        number: number,
        operation: operation ? operation : '',
      };
    }

    case changeSign: {
      return { ...state, number: -state.number };
    }

    case addDot: {
      return { ...state, number: state.number + '.' };
    }

    case fillExpression: {
      return { ...state, number: state.number + payload };
    }

    case endExpression: {
      return { ...state, number: state.number + ')' };
    }

    case startExpression: {
      return { ...state, number: state.number ? state.number + '(' : '(' };
    }
    case clearExpression: {
      return { ...state, number: 0 };
    }

    case getResultWithoutEqualSign: {
      return {
        operation: operation,
        expression: expression,
        number: 0,
      };
    }

    default: {
      return state;
    }
  }
};

export const initialState = { number: 0, expression: 0, operation: '' };
