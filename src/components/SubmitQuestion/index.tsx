import React from 'react';

import { Container, Text } from './styles';

interface Props {
  onPress: () => void;
  isEnd?: boolean;
}

const SubmitQuestion: React.FC<Props> = ({ onPress, isEnd = false }) => {
  return (
    <Container
      onTouchStart={onPress}
      isEnd={isEnd}
    >
      <Text>
        Finalizar
      </Text>
    </Container>
  )
}

export default SubmitQuestion;
