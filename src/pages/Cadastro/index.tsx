import React from 'react';

import { Container } from './styles';
import Top from '../../assets/top2.svg';
import Logo from '../../assets/imagotipo-horizontal.svg';

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Top width={'100%'} />
      <Logo />
    </Container>
  )
}

export default Cadastro;
