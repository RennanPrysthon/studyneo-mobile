import styled from 'styled-components/native';
import Ant from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  height: 30px;
  padding: 25px 20px;
  align-items: center;
  flex-direction: row;
  text-align: center;
  background-color: ${props => props.theme.primary};
`;

export const Top = styled.View`
  height: 100%;
  flex: 15;
  justify-content: center;
  align-items: center;
`;

export const Tap = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  /* color: ${props => props.theme.title}; */
  color: ${props => props.theme.title};
  font-weight: bold;
`;

export const Icon = styled(Ant)`
  color: ${props => props.theme.title};
`;
