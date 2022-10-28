import styled from 'styled-components';
import { flexbox, FlexboxProps, space, SpaceProps } from 'styled-system';

interface IBox extends SpaceProps, FlexboxProps {}

export const Box = styled.div<IBox>(space, flexbox);
