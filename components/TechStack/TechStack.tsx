import React from 'react';
import { TechList, TechListItem } from './TechStack.styles';
import {
  ItemContainer,
  ItemHeader,
  ItemDetails,
  ItemTitle,
} from '../AboutItem/AboutItem.styles';

import imgProject from '../../public/static/icons/project.svg';

const TechStack: React.FC = () => {
  return (
    <ItemContainer>
      <ItemHeader>
        <img src={imgProject} alt="Technologies that I work with (icon)" />
      </ItemHeader>
      <ItemDetails>
        <ItemTitle>Technologies</ItemTitle>
        <TechList>
          <TechListItem>HTML5 & CSS3</TechListItem>
          <TechListItem>Javascript & ES6</TechListItem>
          <TechListItem>React & Redux</TechListItem>
          <TechListItem>Node.js</TechListItem>
          <TechListItem>MongoDB</TechListItem>
          <TechListItem>MySQL</TechListItem>
          <TechListItem>GraphQL</TechListItem>
          <TechListItem>Typescript</TechListItem>
        </TechList>
      </ItemDetails>
    </ItemContainer>
  );
};

export default TechStack;
