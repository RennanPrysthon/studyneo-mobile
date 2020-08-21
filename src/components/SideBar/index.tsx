import React, {useState} from 'react';

import AuthContext from '~/contexts/auth';
import Isotipo from '~/assets/images/isotipo.svg';
import Icon from 'react-native-vector-icons/Feather';
import Loading from '../Loading';

import {
  Container,
  Header,
  UserName,
  Line,
  Menu,
  MenuOption,
  MenuOptionLabel,
  Logout,
  LogoutText,
} from './styles';
import ThemeContext from '~/contexts/themes';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

interface Route {
  id: number;
  path: string;
  name: string;
  isActivated(name: string): boolean;
  icon: string;
}
const SideBar: React.FC<{
  navigation: DrawerNavigationHelpers;
}> = ({navigation}) => {
  const [activePage, setActivePage] = useState('homeScreen');
  const {user, signOut, loading} = React.useContext(AuthContext);
  const {toggleTheme, theme} = React.useContext(ThemeContext);

  if (loading) return <Loading />;

  const routes: Route[] = [
    {
      id: 1,
      path: 'homeScreen',
      name: 'Home',
      isActivated: (name: string) => name === 'homeScreen',
      icon: 'home',
    },
    {
      id: 2,
      path: 'questionsDatabase',
      name: 'Conteúdos',
      isActivated: (name: string) => name === 'questionsDatabase',
      icon: 'book',
    },
    {
      id: 3,
      path: 'questionsDatabase',
      name: 'Resumos',
      isActivated: (name: string) => name === 'questionsDatabase',
      icon: 'book-open',
    },
    {
      id: 4,
      path: 'profile',
      name: 'Perfil',
      isActivated: (name: string) => name === 'profile',
      icon: 'user',
    },
  ];

  function navigateTo(route: Route) {
    setActivePage(route.path);
    navigation.navigate(route.path);
  }

  return (
    <Container>
      <Header>
        <Isotipo />
        <UserName>{user?.name}</UserName>
        <Line />
      </Header>
      <Menu>
        {routes.map((route) => (
          <MenuOption
            key={route.id}
            onPress={() => navigateTo(route)}
            isActivated={true}>
            <Icon name={route.icon} size={25} color={theme.menuOptionText} />
            <MenuOptionLabel>{route.name}</MenuOptionLabel>
          </MenuOption>
        ))}
      </Menu>
      <Logout onPress={toggleTheme}>
        <Icon
          name={theme.themeName === 'light' ? 'moon' : 'sun'}
          size={25}
          color={theme.menuOptionText}
        />
        <LogoutText>Mudar tema</LogoutText>
      </Logout>
      <Logout onPress={signOut}>
        <Icon name="power" size={25} color={theme.menuOptionText} />
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
};

export default SideBar;
