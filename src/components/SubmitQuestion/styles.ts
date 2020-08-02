import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const Container = styled(Animated.View)`
  position: absolute;
  background-color: #00B5E2;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
