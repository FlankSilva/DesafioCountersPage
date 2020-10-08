import React, { useState } from 'react';
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Content } from './styles';
import Card from '../../components/Card'

const CountersPage = () => {

  const navigation = useNavigation();

  const handleNavigateToConfigPage = () => {
    navigation.navigate('ConfigPage');
  };

  return (
    <Container>
      <Content>
        <ScrollView>
          <Card
            title="Card1"
            counts={16}
          />
          <Card
            title="Card1"
            counts={16}
          />
          <Card
            title="Card1"
            counts={16}
          />
          <Card
            title="Card1"
            counts={16}
          />
          <Card
            title="Card1"
            counts={16}
          />
        </ScrollView>
      </Content>
    </Container>
  );
};

export default CountersPage;