import React from "react";
import { DescriptionContainer, DescriptionTitle, DescriptionContent} from './Description.style.jsx';

export default function Description({title}, {overview}) {
  return (
      <DescriptionContainer>
      <DescriptionTitle>{title}</DescriptionTitle>
      <DescriptionContent>{overview}</DescriptionContent> 
      </DescriptionContainer>
        
  );
}