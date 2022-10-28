import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from '../../config/theme';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  label?: string;
  icon?: React.ReactNode;
  positionIcon?: 'left' | 'right' | 'center';
  disabled?: boolean;
}

interface IStyledButton {
  variant: IButton['variant'];
  icon: IButton['icon'];
  positionIcon: IButton['positionIcon'];
  disabled: IButton['disabled'];
}

const backgroundColorVariantMap = {
  primary: theme.palette.primary.main,
  secondary: theme.palette.neutral.white,
};

const colorVariantMap = {
  primary: theme.palette.text.grey,
  secondary: theme.palette.text.brown,
};

const StyledButton = styled.button<IStyledButton>`
  ${({ theme, variant, icon, positionIcon, disabled }) => `
     font-family: 'Lato', sans-serif;
     font-size: 16px;
     background-color: ${backgroundColorVariantMap[variant]};
     color: ${colorVariantMap[variant]};
     padding: 12px 32px;
     border-radius: 16px;
     border: none;
     outline: none;
     width: 100%;
     cursor: pointer;
     ${
       disabled &&
       `
      cursor: default;
      color: #8C8C8C;
      svg {
        background-color: #E8E8E8;
        color: #8C8C8C;
      }
      `
     }
     ${
       disabled &&
       variant === 'primary' &&
       `
        background-color: #E8E8E8;
        `
     };
     ${
       variant === 'secondary' &&
       `
       border: 1px solid #BEA59D;
     `
     };
     ${
       icon &&
       `
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        width: 12px;
        ${
          positionIcon === 'left' &&
          `
          margin-right: 10px;
        `
        };
        ${
          positionIcon === 'right' &&
          `
          margin-left: 10px;
        `
        };
      }
      ${
        positionIcon === 'center' &&
        `
        justify-content: center;
          width: 120px;
          height: 50px;
          > div {
            width: 18px;
            div {
              width: 18px;
              height: 18px;
            }
          }
          `
      };
     `
     }
  `}
`;

export const Button = ({
  variant = 'primary',
  icon,
  label,
  positionIcon = 'left',
  disabled,
  ...props
}: IButton) => (
  <StyledButton
    disabled={disabled}
    variant={variant}
    icon={icon}
    positionIcon={positionIcon}
    {...props}
  >
    {positionIcon === 'left' && icon}
    {positionIcon === 'center' ? icon : label}
    {positionIcon === 'right' && icon}
  </StyledButton>
);
