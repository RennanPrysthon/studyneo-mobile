import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export const UserName = styled.Text`
  color: ${(props) => props.theme.texts};
  font-size: 22px;
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.primary};
  margin: 20px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;

export const Menu = styled.View`
  width: 100%;
  flex: 1;
`;
interface MenuOptionProps {
  isActivated: boolean;
}
export const MenuOption = styled.TouchableOpacity<MenuOptionProps>`
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: row;
  padding: 5px;
  border-radius: 10px;
  margin-top: 10px;
  width: 100%;
  opacity: ${({isActivated}) => (isActivated ? '1' : '0.5')};
`;

export const MenuOptionLabel = styled.Text`
  color: ${(props) => props.theme.menuOptionText};
  margin-left: 8px;
  font-family: 'Rubik-Medium';
  font-size: 18px;
`;
export const Logout = styled.TouchableOpacity`
  align-items: baseline;
  justify-content: flex-start;
  flex-direction: row;
  padding: 5px;
  border-radius: 10px;
  width: 100%;
`;

export const LogoutText = styled.Text`
  color: ${(props) => props.theme.menuOptionText};
  margin-left: 8px;
  font-family: 'Rubik-Medium';
  font-size: 18px;
`;
