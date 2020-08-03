import React from 'react';

import { Container } from './styles';

import Icons from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface Props {
  next: () => void;
  prev: () => void;
  page: number;
}

const Controllers: React.FC<Props> = ({ page, prev, next }) => {
  return (
    <Container>
      <TouchableOpacity onPress={prev}>
        <Icons name="left" size={18} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={{ color: '#FFFFFF' }}>
        {page}
      </Text>
      <TouchableOpacity onPress={next}>
        <Icons name="right" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </Container>
  )
}

export default Controllers;
