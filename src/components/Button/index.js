import React from 'react';

import {Container2, TextBt} from './styles';

const Button = ({children}) => (
  <Container2>
    <TextBt>{children}</TextBt>
  </Container2>
);

export default Button;
