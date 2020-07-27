import React from 'react';

import { Container, Header, UserName, Line, Menu, Route, RouteName, Logout, LogoutText } from './styles';
import Isotipo from '../../assets/isotipo.svg';
import AuthContext from '../../contexts/auth';

const SideBar: React.FC = () => {
  const auth = React.useContext(AuthContext);

  return (
    <Container>
      <Header>
        <Isotipo />
        {/* <UserName>
        Name
      </UserName> */}
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
        onPress={() => auth.signOut()}
      >
        <LogoutText>
          Sair
        </LogoutText>
      </Logout>
    </Container>
  )
}

export default SideBar;
