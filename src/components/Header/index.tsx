import React from 'react';
import { Container, Top, Tap } from './styles';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import Menu from '../../assets/menu.svg';
import TopLogo from '../../assets/topLogo.svg';

const Header: React.FC = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Tap onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Menu />
      </Tap>
      <Top>
        <TopLogo />
      </Top>
    </Container>
  )
}

export default Header;
