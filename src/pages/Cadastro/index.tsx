import React from 'react';

import { Container, TopImage } from './styles';

const Cadastro: React.FC = () => {
  return (
    <Container>
      <TopImage
        source={require('../../assets/top.png')}
      />
    </Container>
  )
}

export default Cadastro;
