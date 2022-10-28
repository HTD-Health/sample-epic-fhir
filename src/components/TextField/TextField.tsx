import React, { InputHTMLAttributes, useRef } from 'react';
import styled from 'styled-components';
import { Typography } from 'components/Typography';
import { Box } from 'components/Box';
import { ErrorHelperText } from 'components/ErrorHelperText';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
interface IStyledInput {
  error: IProps['error'];
}
const Root = styled.div`
  width: 100%;
`;
const WrapperInput = styled.div`
  position: relative;
`;
const StyledInput = styled.input<IStyledInput>`
  ${({ theme, error }) => `
    display: block;
    width: 100%;
    height: 50px;
    border: 1px solid ${
      error ? theme.palette.system.error : theme.palette.system.default
    };
    border-radius: 8px;
    background-color: #fff;
    padding: ${theme.space[3]}px ${theme.space[5]}px;
    font-size: 16px;
    color: #3F2C26;
    line-height: 26px;
    outline: none;

    &:focus {
      border: 1px solid #448B7E;
    }
  `}
`;

export const TextField = React.forwardRef<HTMLInputElement, IProps>(
  ({ label, error, ...props }, ref) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    return (
      <Root>
        <Box ml={5} mb={2}>
          {label ? (
            <Typography variant="body2" color="primary">
              {label}
            </Typography>
          ) : null}
        </Box>
        <WrapperInput ref={wrapperRef}>
          <StyledInput ref={ref} error={error} {...props} />
        </WrapperInput>
        {error && <ErrorHelperText>{error}</ErrorHelperText>}
      </Root>
    );
  }
);
