import React from 'react';
import {Container, Main, IconClone, IconPlus, IconStyle} from './styles';

const Tabs = () => (
  <Container>
    <IconClone syze={16} name="clone" />
    <IconStyle syze={16} name="search" />
    <Main>
      <IconPlus syze={16} name="plus" />
    </Main>
    <IconStyle syze={16} name="bell-o" />
    <IconStyle syze={16} name="user-o" />
  </Container>
);

export default Tabs;
