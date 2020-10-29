import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 800;
  font-size: 3rem;
`;

export const ProductsCatalog = styled.section`
  display: flex;
  margin: auto;
  flex-direction: column;
  max-width: 90vw;
  gap: 20px;
  @media (min-width: 800px) {
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    > div {
      max-width: 25%;
    }
  }
`;

export const NewProduct = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
`;

export const NovoProdutoForm = styled.section<{ visible: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 10px;
  border-radius: 10px;
  width: 95vw;
  margin: auto;
  display: ${props => (props.visible ? 'block' : 'none')};
  button {
    margin: auto;
    padding: 10px 20px;
    display: block;
    border-radius: 4px;
    border-width: 1px;
  }
`;
