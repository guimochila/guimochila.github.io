import React from 'react';
import {
  ItemContainer,
  ItemHeader,
  ItemDetails,
  ItemTitle,
  ItemDescription,
} from './AboutItem.styles';

export interface Item {
  image: string;
  title: string;
  description: string;
}

interface Props {
  item: Item;
}

const AboutItem: React.FC<Props> = ({
  item: { title, image, description },
}) => {
  return (
    <ItemContainer>
      <ItemHeader>
        <img src={image} alt={title} />
      </ItemHeader>
      <ItemDetails>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>{description}</ItemDescription>
      </ItemDetails>
    </ItemContainer>
  );
};

export default AboutItem;
