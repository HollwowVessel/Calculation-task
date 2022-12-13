import React from 'react';
import { Display } from 'components/Display/Class';
import { Keypad } from 'components/Keypad/Class';
import { StyledLayoutContainer } from '../styled';
import { func } from 'prop-types';
import { logicOfCalculator } from 'utils/helpers';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, expression: 0, operation: '' };
  }

  handleValue = (e) => {
    const val = e.target.value;
    const { setHistoryItems } = this.props;
    const action = logicOfCalculator(val, this.state);
    switch (action.type) {
      case 'clearAll': {
        this.setState({ number: 0, expression: 0, operation: '' });
        break;
      }
      case 'addNumber': {
        this.setState((prev) => ({
          ...prev,
          number: prev.number ? prev.number + action.payload : action.payload,
        }));
        break;
      }
      case 'changeOperationWithoutParenthesis': {
        return this.setState((prev) => ({
          ...prev,
          operation: action.payload,
        }));
      }
      case 'getOperation': {
        return (prev) => ({ ...prev, operation: action.payload });
      }
      case 'swapDisplayValues': {
        return this.setState({
          operation: action.payload,
          number: 0,
          expression: this.state.number,
        });
      }

      case 'getResult': {
        setHistoryItems();
        return this.setState({
          expression: action.payload.expression,
          number: action.payload.number,
          operation: '',
        });
      }

      case 'changeSign': {
        return this.setState((prev) => ({
          ...prev,
          number: -this.state.number,
        }));
      }

      case 'addDot': {
        return this.setState((prev) => ({
          ...prev,
          number: this.state.number + '.',
        }));
      }

      case 'fillExpression': {
        return this.setState((prev) => ({
          ...prev,
          number: this.state.number + action.payload,
        }));
      }

      case 'endExpression': {
        return this.setState((prev) => ({
          ...prev,
          number: this.state.number + ')',
        }));
      }

      case 'startExpression': {
        return this.setState((prev) => ({
          ...prev,
          number: this.state.number ? this.state.number + '(' : '(',
        }));
      }
      case 'clearExpression': {
        return this.setState((prev) => ({ ...prev, number: 0 }));
      }
      default: {
        return null;
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <StyledLayoutContainer>
        <Display displayState={this.state} />
        <Keypad handleValue={this.handleValue} />
      </StyledLayoutContainer>
    );
  }
}

Layout.propTypes = {
  setHistoryItems: func.isRequired,
};
