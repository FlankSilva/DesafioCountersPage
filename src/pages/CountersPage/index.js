import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { Container, Content } from './styles';
import Card from '../../components/Card';

const CountersPage = () => {
  const [selected, setSelected] = useState([]);

  const data = [
    {
      title: 'Card1',
      counts: 10,
    },
    {
      title: 'Card2',
      counts: 11,
    },
    {
      title: 'Card3',
      counts: 12,
    },
    {
      title: 'Card4',
      counts: 10,
    },
    {
      title: 'Card5',
      counts: 11,
    },
    {
      title: 'Card6',
      counts: 12,
    },
  ];

  const navigation = useNavigation();

  const handleNavigateToConfigPage = () => {
    navigation.navigate('ConfigPage');
  };

  return (
    <Container>
      <Content>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          extraData={selected}
          renderItem={({ item }) => {
            return (
              <Card
                title={item.title}
                counts={item.counts}
                selected={selected.title === item.title}
                setSelected={() => setSelected(item)}
              />
            );
          }}
        />
      </Content>
    </Container>
  );
};

export default CountersPage;
