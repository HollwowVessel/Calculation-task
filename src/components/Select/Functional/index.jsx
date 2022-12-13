import React from 'react';
import { selectOptions } from 'constants/select';
import { StyledSelect, StyledSelectWrap } from '../styled';
import { func, object } from 'prop-types';

export const Select = ({ setTheme, theme }) => {
  return (
    <StyledSelectWrap>
      <StyledSelect onChange={setTheme()} value={theme.name} id='theme-select'>
        {selectOptions.map(({ id, value, text }) => (
          <option key={id} value={value} id={`${value}`}>
            {text}
          </option>
        ))}
      </StyledSelect>
    </StyledSelectWrap>
  );
};

Select.propTypes = {
  setTheme: func.isRequired,
  theme: object.isRequired,
};
