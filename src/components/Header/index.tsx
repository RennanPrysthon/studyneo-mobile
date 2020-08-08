import React from 'react';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';

import TopLogo from '~/assets/images/topLogo.svg';
import Menu from '~/assets/images/menu.svg';

import { Container, Top, Tap } from './styles';

const Header: React.FC<{ props: StackHeaderProps }> = ({ props }) => {
  const nav = useNavigation();
  console.log(props?.scene?.route?.name)
  return (
    <Container>
      <Tap onPress={() => nav.dispatch(DrawerActions.toggleDrawer())}>
        <Menu />
      </Tap>
      <Top>
        <TopLogo />
      </Top>
    </Container>
  )
}

export default Header;
