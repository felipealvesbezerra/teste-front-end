import styled, { css } from 'styled-components';
import { Tooltip } from '../../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  border: 1px solid #fff;
  color: rgba(38, 38, 38, 1);

  & + div {
    margin-top: 5px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: rgba(162, 0, 0, 1);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #e5ab05;
      border-color: #e5ab05;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #e5ab05;
    `}

    ${props =>
    !props.isFocused &&
    css`
      &:hover {
        border-color: #000000;
      }
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;

    &::placeholder {
      color: rgba(133, 133, 133, 1);
    }
  }

  svg {
    margin-right: 10px;
  }
`;

export const ErrorTooltip = styled(Tooltip)`
  height: 20px;
  margin-left: 10px;

  svg {
    margin-right: 0px;
    color: rgba(162, 0, 0, 1);
  }
`;
