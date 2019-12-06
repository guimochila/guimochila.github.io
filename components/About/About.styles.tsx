import styled from '@emotion/styled';
import imgChevron from '../../public/static/icons/chevron-thin-right.svg';

export const ItemList = styled.ol`
  display: flex;
  padding: 0 4rem 2rem;
  justify-content: flex-start;
  max-width: 66rem;
  flex-wrap: wrap;

  @media (max-width: 30em) {
    padding: 0 2rem 2rem;
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

export default Container;
