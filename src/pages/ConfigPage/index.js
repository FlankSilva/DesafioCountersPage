import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

// import { Container } from './styles';

const ConfigPage = () => {
  const navigation = useNavigation();

  const handleNavigateToCountersPage = () => {
    navigation.navigate('CountersPage');
  };

  return (
    <View>
      <Text>Page Config</Text>
      <RectButton onPress={handleNavigateToCountersPage}>
        <Text>Botão</Text>
      </RectButton>
    </View>
  );
};

export default ConfigPage;
