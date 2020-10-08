import React from 'react';
import {  Text } from 'react-native';

import { Container, TitleCounter, ContainerConter, Conter } from './styles';

const Card = ({ title, counts }) => {

  return (
    <Container>
      <TitleCounter>
        {title}
      </TitleCounter>
      <ContainerConter>
        <Conter>
          {counts}
        </Conter>
      </ContainerConter>
    </Container>
  )
}

export default Card;