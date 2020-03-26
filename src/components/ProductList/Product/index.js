import React from 'react';
import {
  Container,
  ImageContainer,
  InfoContainer,
  TextDescription,
  TextFunction,
  TextTitle,
  Image,
} from './styles';

const Product = ({product: {image, title, description, funct}}) => (
  <Container>
    <ImageContainer>
      <Image source={{uri: image}} />
    </ImageContainer>
    <InfoContainer>
      <TextTitle>{title}</TextTitle>
      <TextFunction>{funct}</TextFunction>
      <TextDescription>{description}</TextDescription>
    </InfoContainer>
  </Container>
);

export default Product;
