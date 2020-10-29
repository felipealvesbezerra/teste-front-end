import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: rgba(255, 246, 219, 1);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  padding: 20px 15px;
  img {
    mix-blend-mode: darken;
    max-width: 100%;
    margin: auto;
    display: block;
  }

  main {
    width: 100%;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    main {
      min-width: 300px;
      width: 100%;
    }
    > section {
      position: absolute;
      background: rgba(0, 0, 0, 0.8);
      padding: 30px 10px;
      border-radius: 8px;
    }
  }
`;

const TitlesCommons = css`
  text-align: center;
  letter-spacing: 3px;
`;

export const Title = styled.h1`
  ${TitlesCommons}
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2em;
`;
export const SubTitle = styled.h2`
  ${TitlesCommons}
  font-weight: 600;
  font-size: 1.2em;
  margin-top: -8px;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

interface DescriptionProps {
  visible: boolean;
}

export const Description = styled.div<DescriptionProps>`
  text-align: center;
  button {
    width: 100%;
    background: transparent;
    border-color: transparent;
    margin-top: 10px;
    letter-spacing: 2px;

    &::after {
      content: '';
      width: 10%;
      height: 1px;
      background-color: #000;
      display: block;
      margin: auto;
      transition: all 0.2s linear;
    }

    &:hover::after {
      width: 20%;
    }
  }
  > div {
    display: ${props => (props.visible ? 'block' : 'none')};
  }
`;
interface EditableContainerProps {
  visible: boolean;
}

export const EditableContainer = styled.section<EditableContainerProps>`
  display: none;
  ${props => props.visible && 'display: block'};
  overflow: hidden;
  transition: all 0.2 linear;

  button {
    margin: auto;
    padding: 10px 20px;
    display: block;
    border-radius: 4px;
    border-width: 1px;
  }
`;
