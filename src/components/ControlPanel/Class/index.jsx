import { func } from 'prop-types';
import React from 'react';
import { StyledShowHistoryButton } from '../styled';

export class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleHistory } = this.props;
    return (
      <StyledShowHistoryButton onClick={handleHistory} id='show-history'>
        Show
      </StyledShowHistoryButton>
    );
  }
}

ControlPanel.propTypes = {
  handleHistory: func.isRequired,
};
