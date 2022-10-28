import React from 'react';
import styled from 'styled-components';

export interface IProps {
  children: React.ReactNode;
}

const Root = styled.div`
  ${({ theme }) => `
    background-color: ${theme.palette.neutral.white};
    border-radius: 15px;
    padding: 16px;
  `}
`;

export const Card: React.FC<IProps> = ({ children, ...props }) => (
  <Root {...props}>{children}</Root>
);
