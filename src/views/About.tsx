import React from 'react';
import styled from 'styled-components';

const Par = styled.p`
  ${({ theme }) => `
    color: red;
  `}
`;

export const AboutPage = () => {
  const msg = 'test';

  return <h1>about page: this is const {msg} page ... </h1>;
};
