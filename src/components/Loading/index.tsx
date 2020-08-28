import React from 'react';

import LottieView from 'lottie-react-native';

import { Container } from './styles';

const Loading: React.FC = () => (
  <Container>
    <LottieView source={require('~/animations/loading_dark.json')} style={{ flex: 1, zIndex: 5, margin: 60 }} autoPlay loop />
  </Container>
);

export default Loading;
