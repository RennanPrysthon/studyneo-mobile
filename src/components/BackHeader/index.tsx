import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Top, Tap, Icon } from './styles';

const BackHeader: React.FC = () => {
  const nav = useNavigation();
  return (
    <Container>
      <Tap onPress={() => nav.goBack()}>
        <Icon name="left" size={20} />
      </Tap>
      <Top>
      </Top>
    </Container >
  )
}

export default BackHeader;
