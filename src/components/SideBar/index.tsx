import React from 'react';

import { Container, Header, UserName, Line, Menu, Route, RouteName, Logout, LogoutText } from './styles';
import Isotipo from '../../assets/isotipo.svg';
import AuthContext from '../../contexts/auth';
import Loading from '../Loading';

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
        onPress={() => signOut()}
      >
        <LogoutText>
          Sair
        </LogoutText>
      </Logout>
    </Container>
  )
}

export default SideBar;
