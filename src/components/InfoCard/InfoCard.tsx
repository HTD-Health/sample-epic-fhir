import React from 'react';
import styled from 'styled-components';
import { theme } from 'config/theme';
import { Typography } from 'components/Typography';
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg';
import { ReactComponent as SuccessIcon } from 'assets/icons/success.svg';
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
import { Box } from 'components/Box';

export interface IProps {
  variant: 'info' | 'success' | 'error';
  title?: string;
  desc: string;
}

interface IWrapper {
  variant: IProps['variant'];
}
interface IWrapperTypography {
  withTitle?: boolean;
}

const backgroundVariantMap = {
  info: theme.palette.background.info,
  success: theme.palette.background.success,
  error: theme.palette.background.error,
};

const Wrapper = styled.div<IWrapper>`
  ${({ theme, variant }) => `
    background-color: ${backgroundVariantMap[variant]};
    padding: 16px 24px 16px 26px;
    border-radius: 8px;
    display: inline-flex;
  `}
`;
const StyledIcon = styled(InfoIcon)`
  display: flex;
`;
const WrapperTypography = styled.div<IWrapperTypography>`
  ${({ withTitle }) => `
    display: flex;
    ${
      withTitle
        ? `
      flex-direction: column;
      align-items: baseline;
    `
        : `
      flex-direction: row;
      align-items: center;
    `
    }
  
  `}
`;

export const InfoCard: React.FC<IProps> = ({ variant, title, desc }) => {
  const IconVariant = () => {
    switch (variant) {
      case 'info':
        return <StyledIcon />;
      case 'success':
        return <SuccessIcon />;
      case 'error':
        return <ErrorIcon />;
    }
  };

  return (
    <Wrapper variant={variant}>
      <Box mr={5}>{IconVariant()}</Box>
      <WrapperTypography withTitle={!!title}>
        {title ? (
          <Typography variant="h2" color="primary">
            {title}
          </Typography>
        ) : null}
        <Typography variant="body2" color="primary">
          {desc}
        </Typography>
      </WrapperTypography>
    </Wrapper>
  );
};
