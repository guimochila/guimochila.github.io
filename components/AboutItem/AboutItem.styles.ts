import styled from '@emotion/styled';

export const ItemContainer = styled.li`
  display: flex;
  list-style: none;
  flex-grow: 1;
  @media (max-width: 30em) {
    flex-wrap: wrap;
    display: flex;
  }
`;

export const ItemHeader = styled.div`
  img {
    height: 7rem;
    width: 7rem;
  }
  @media (max-width: 30em) {
    margin: 1rem auto;
  }
`;

export const ItemDetails = styled.div`
  padding: 0 2.5rem 4rem;
  flex-grow: 1;
`;

export const ItemTitle = styled.h3`
  margin-bottom: 2rem;
  color: #333;
  font-weight: 400;
  @media (max-width: 30em) {
    text-align: center;
  }
`;

export const ItemDescription = styled.p`
  line-height: 1.7;
  max-width: 50rem;
`;
