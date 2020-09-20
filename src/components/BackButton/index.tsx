import React from 'react';

import { Container } from './styles';

import Icons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const BackButton: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container
      onPress={goBack}
    >
      <Icons name="left" size={18} color="#FFFFFF" />
    </Container>
  );
};

export default BackButton;
