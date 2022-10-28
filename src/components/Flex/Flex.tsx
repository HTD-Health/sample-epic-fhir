import styled, { css } from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';

interface IFlex extends SpaceProps, FlexboxProps {}

export const Flex = styled.div<IFlex>(
  () =>
    css`
      display: flex;
    `,
  space,
  flexbox
);
