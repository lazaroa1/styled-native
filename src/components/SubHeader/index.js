import React from 'react';
import Button from '../Button';
import {
  Container,
  Avatar,
  ProfileInfo,
  Name,
  Bio,
  ButtonContainer,
  ButtonMessage,
  ButtonFallow,
  BtM,
  BtS,
} from './styles';

const SubHeader = () => (
  <Container>
    <Avatar
      source={{
        uri: 'https://i.redd.it/cwcd8mlxblv31.png',
      }}
    />

    <ProfileInfo>
      <Name>GO GO MANIAC</Name>
      <Bio>Não sei oque por ainda aqui</Bio>
    </ProfileInfo>

    <ButtonContainer>
      <BtM>
        <ButtonMessage>mensagem</ButtonMessage>
      </BtM>
      <BtS>
        <ButtonFallow>Seguir</ButtonFallow>
      </BtS>
    </ButtonContainer>
  </Container>
);

export default SubHeader;
