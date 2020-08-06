import React from 'react';

import AuthContext from '~/contexts/auth';
import Isotipo from '~/assets/images/isotipo.svg';

import Loading from '../Loading';

import { Container, Header, UserName, Line, Menu, Route, RouteName, Logout, LogoutText } from './styles';
import ThemeContext from '~/contexts/themes';

const SideBar: React.FC = () => {
  const { user, signOut, loading } = React.useContext(AuthContext);
  const { toggleTheme } = React.useContext(ThemeContext)

  if (loading) return <Loading />;

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
        <Route>
          <RouteName>
            Home
          </RouteName>
        </Route>
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
