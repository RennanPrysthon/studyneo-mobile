import React from 'react';

import { ActivityIndicator } from 'react-native';

const Loading: React.FC = () => {
  return <ActivityIndicator
    size={22}
    color="#00B5E2"
    style={{
      flex: 1
    }}
  />
}

export default Loading;
