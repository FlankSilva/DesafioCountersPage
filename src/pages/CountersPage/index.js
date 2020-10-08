import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { Container } from './styles';

const CountersPage = () => {
  const navigation = useNavigation();

  const handleNavigateToConfigPage = () => {
    navigation.navigate('ConfigPage');
  };

  return (
    <Container>
      <Text>Page Counters</Text>
      <RectButton onPress={handleNavigateToConfigPage}>
        <Text>Botão</Text>
      </RectButton>
    </Container>
  );
};

export default CountersPage;
