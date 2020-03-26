import React from 'react';
import {Container, Title, IconStyle} from './styles';

const Header = () => (
  <Container>
    <IconStyle name="ios-arrow-back" size={24} />
    <Title>Profile</Title>
    <IconStyle name="ios-more" size={24} />
  </Container>
);

export default Header;
