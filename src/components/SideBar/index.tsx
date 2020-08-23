import React from 'react';

import AuthContext from '~/contexts/auth';
import Isotipo from '~/assets/images/isotipo.svg';

import Loading from '../Loading';

import { Container, Header, UserName, Line, Menu, Route, RouteName, Logout, LogoutText } from './styles';
import ThemeContext from '~/contexts/themes';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';


const SideBar: React.FC<{ navigation: DrawerNavigationHelpers }> = ({ navigation }) => {
  const { user, signOut, loading } = React.useContext(AuthContext);
  const { toggleTheme } = React.useContext(ThemeContext)

  if (loading) return <Loading />;

  const routes = [
    // {
    //   id: 1,
    //   path: 'homeScreen',
    //   name: 'Home',
    //   isActivated: (name: string) => name === 'homeScreen',
    // },
    {
      id: 2,
      path: 'questionsDatabase',
      name: 'Banco de questões',
      isActivated: (name: string) => name === 'questionsDatabase'
    },
  ]

  function navigateTo(path: string) {
    navigation.navigate(path)
  }

  return (
    <Container>
      <Header>
        <Isotipo />
        <UserName>
          {user?.name}
        </UserName>
        <Line />
      </Header>
      <Menu>
        {routes.map(routes => (
          <Route
            key={routes.id}
            onPress={() => navigateTo(routes.path)}
            isActivated={routes.isActivated()}
          >
            <RouteName>
              {routes.name}
            </RouteName>
          </Route>
        ))}
      </Menu>
      <Logout
        onPress={toggleTheme}
      >
        <LogoutText>
          Mudar tema
        </LogoutText>
      </Logout>
      <Logout
        onPress={signOut}
      >
        <LogoutText>
          Sair
        </LogoutText>
      </Logout>
    </Container>
  )
}

export default SideBar;
