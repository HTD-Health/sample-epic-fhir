import React from 'react';
import styled from 'styled-components';

export const ErrorHelperText = styled.div`
  ${({ theme }) => `
    color: ${theme.palette.text.error};
    margin-top: ${theme.space[2]}px;
    margin-left: ${theme.space[5]}px;
    font-size: 14px;
    line-height: 23px;
  `}
`;
