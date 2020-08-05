import React from 'react';

import LottieView from 'lottie-react-native';

const Loading: React.FC = () => <LottieView source={require('~/animations/loading.json')} style={{
  margin: 60
}} autoPlay loop />


export default Loading;
