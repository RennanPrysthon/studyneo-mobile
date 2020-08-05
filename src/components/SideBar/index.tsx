import React from 'react';

import AuthContext from '~/contexts/auth';
import Isotipo from '~/assets/images/isotipo.svg';

import Loading from '../Loading';

import { Container, Header, UserName, Line, Menu, Route, RouteName, Logout, LogoutText } from './styles';

const SideBar: React.FC = () => {
  const { user, signOut, loading } = React.useContext(AuthContext);

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
