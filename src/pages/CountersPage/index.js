import React from 'react';
import { View, Text } from 'react-native';
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
        {/* <Text>Page Counters</Text> */}
        <Card
          title="Card1"
          counts={16}
        />
      </Content>
      {/* <RectButton onPress={handleNavigateToConfigPage}>
        <Text>Botão</Text>
      </RectButton> */}
    </Container>
  );
};


export default CountersPage;