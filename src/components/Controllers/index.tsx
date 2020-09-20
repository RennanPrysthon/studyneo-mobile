import React from 'react';

import { Text } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/AntDesign';

import { Container } from './styles';

const Controllers: React.FC<{ next: () => void, prev: () => void; page: number; last: number }> = ({ page, prev, next, last }) => {
  return (
    <Container>
      <TouchableOpacity onPress={prev}>
        <Icons name="left" size={18} color="#FFFFFF" />
      </TouchableOpacity>
      <Text style={{ color: '#FFFFFF' }}>
        {page}
        {'/'}
        {last}
      </Text>
      <TouchableOpacity onPress={next}>
        <Icons name="right" size={18} color="#FFFFFF" />
      </TouchableOpacity>
    </Container>
  )
}

export default Controllers;
