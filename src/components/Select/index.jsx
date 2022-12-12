import React from 'react';
import { selectOptions } from 'constants/select';
import { StyledSelect, StyledSelectWrap } from './styled';

export const Select = ({ setTheme, theme }) => {
  return (
    <StyledSelectWrap>
      <StyledSelect onChange={setTheme()} value={theme.name}>
        {selectOptions.map(({ id, value, text }) => (
          <option key={id} value={value}>
            {text}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrap>
  );
};
