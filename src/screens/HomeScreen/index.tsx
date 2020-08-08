import React from 'react';

import {
  Container,
  Header,
  Title,
  Username,
} from './styles';

const HomeScreen: React.FC = () => {

  return (
    <Container>
      <Header>
        <Title>
          Bem vindx, <Username>Rennan Prysthon</Username>!
        </Title>
      </Header>
    </Container>
  )

}

export default HomeScreen;
