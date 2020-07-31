import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

interface Props {
  isEnd: boolean;
}

export const Container = styled(Animated.View) <Props>`
  position: absolute;
  bottom: ${props => props.isEnd === true ? 0 : '10px'};
  left: ${props => props.isEnd === true ? 0 : '10px'};
  right: ${props => props.isEnd === true ? 0 : '10px'};
  background-color: #00B5E2;
  padding: 10px;
  border-radius: ${props => props.isEnd === true ? 0 : '10px'};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;
