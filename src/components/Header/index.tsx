import React from 'react';
import { Container, TopLogo } from './styles';
import { SvgXml } from 'react-native-svg';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 18H20M4 6H20H4ZM4 12H12H4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const Header: React.FC = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <SvgXml xml={xml} width="30px" height="30px" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} />
      <TopLogo source={require('../../assets/topLogo.png')} />

    </Container>
  )
}

export default Header;
