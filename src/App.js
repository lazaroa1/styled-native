import React from 'react';
import {ScrollView} from 'react-native';
import {Container} from './styles';
import Header from './components/header';
import SubHeader from './components/SubHeader';
import ProductList from './components/ProductList';
import Tabs from './components/Tabs';

const App = () => (
  <Container>
    <Header />
    <ScrollView>
      <SubHeader />
      <ProductList />
    </ScrollView>
    <Tabs />
  </Container>
);

export default App;
