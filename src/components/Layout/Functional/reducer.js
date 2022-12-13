export const reducer = function (state, action) {
  switch (action.type) {
    case 'clearAll': {
      return { number: 0, expression: 0, operation: '' };
    }
    case 'addNumber': {
      return {
        ...state,
        number: state.number ? state.number + action.payload : action.payload,
      };
    }
    case 'changeOperationWithoutParenthesis': {
      return {
        ...state,
        operation: action.payload,
      };
    }
    case 'getOperation': {
      return {
        ...state,
        operation: action.payload,
      };
    }
    case 'swapDisplayValues': {
      return {
        operation: action.payload,
        number: 0,
        expression: state.number,
      };
    }

    case 'getResult': {
      return {
        expression: action.payload.expression,
        number: action.payload.number,
        operation: '',
      };
    }

    case 'changeSign': {
      return { ...state, number: -state.number };
    }

    case 'addDot': {
      return { ...state, number: state.number + '.' };
    }

    case 'fillExpression': {
      return { ...state, number: state.number + action.payload };
    }

    case 'endExpression': {
      return { ...state, number: state.number + ')' };
    }

    case 'startExpression': {
      return { ...state, number: state.number ? state.number + '(' : '(' };
    }
    case 'clearExpression': {
      return { ...state, number: 0 };
    }

    default: {
      return state;
    }
  }
};

export const initialState = { number: 0, expression: 0, operation: '' };
