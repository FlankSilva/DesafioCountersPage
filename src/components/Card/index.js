import React, { useState } from 'react';

import { Container, TitleCounter, ContainerConter, Conter } from './styles';

const Card = ({ title, counts, selected, setSelected }) => {
  console.tron.log(selected);

  return (
    <Container onPress={setSelected} cardSelect={selected}>
      <TitleCounter>{title}</TitleCounter>
      <ContainerConter>
        <Conter cardSelect={selected}>{counts}</Conter>
      </ContainerConter>
    </Container>
  );
};

export default Card;
