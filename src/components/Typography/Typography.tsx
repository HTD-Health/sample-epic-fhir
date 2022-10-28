import React from 'react';
import { theme as themeConfig } from 'config/theme';
import styled, { css } from 'styled-components';
import { space, SpaceProps, variant } from 'styled-system';

export type TypographyType = {
  variant: keyof typeof themeConfig.textStyles;
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  fontWeight?: 300 | 400 | 700;
} & SpaceProps;

export const Typography = styled.div<TypographyType>(
  variant({ scale: 'textStyles' }),
  ({ theme, color, fontWeight }) => css`
    ${color === 'primary' ? `color: ${theme.palette.text.primary};` : null}
    ${color === 'secondary' ? `color: ${theme.palette.text.disabled};` : null}
      ${fontWeight ? `font-weight: ${fontWeight};` : ''}
  `,
  space
);
