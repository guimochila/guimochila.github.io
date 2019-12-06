import styled from '@emotion/styled';

import imgChevron from '../../public/static/icons/chevron-thin-right.svg';

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

export const TechListItem = styled.li`
  flex: 0 0 50%;
  margin-bottom: 0.7rem;

  &::before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: 0.7rem;
    background-image: url(${imgChevron});
    background-size: cover;
  }

  @supports ((-webkit-mask-image: url()) or (mask-image: url())) {
    &::before {
      background-color: #f24976;
      -webkit-mask-image: url(${imgChevron});
      -webkit-mask-size: cover;
      mask-image: url(${imgChevron});
      mask-size: cover;
      background-image: none;
    }
  }
`;
