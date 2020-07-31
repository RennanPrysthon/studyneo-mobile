import React from 'react';
import { Container, Tap } from './styles';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const Back: React.FC = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Tap onPress={navigation.goBack}>

        <Icon name="left" color="#fff" size={22} />
      </Tap>
    </Container >
  )
}

export default Back;
