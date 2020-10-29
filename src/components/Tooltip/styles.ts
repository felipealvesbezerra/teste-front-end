import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 200px;
    background: #000;
    padding: 8px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;

    &::after {
      content: ' ';
      position: absolute;
      border-style: solid;
      border-color: #000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    visibility: visible;
  }
`;
