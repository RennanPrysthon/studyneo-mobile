import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  background-color: ${props => props.theme.background};
`;

export const UserName = styled.Text`
  color: ${props => props.theme.texts};
  font-size: 22px;
`;

export const Line = styled.View`
  width: 70%;
  height: 2px;
  background-color: ${props => props.theme.primary};
  margin: 20px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;

export const Menu = styled.View`
  width: 70%;
  flex: 1;
`;

export const Route = styled.TouchableOpacity <{ isActivated: boolean }>`
  align-items: center;
  border-color: ${props => props.theme.line};
  border-width: 2px;
  padding: 5px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const RouteName = styled.Text`
  color: ${props => props.theme.texts};

`;

export const Logout = styled.TouchableOpacity``;

export const LogoutText = styled.Text`
  color: ${props => props.theme.texts}
`;
