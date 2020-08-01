import React from 'react';
import { Container, Top, Tap, Title, Center } from './styles';

import { useNavigation, DrawerActions, ParamListBase, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/AntDesign';

import TopLogo from '../../assets/topLogo.svg';
import Menu from '../../assets/menu.svg';
interface Props {
  navigation?: StackNavigationProp<ParamListBase>;
}

type ParamsList = {
  ID: {
    id: number;
    title: string;
  }
}

const CHAR_LIMIT = 25;

const Header: React.FC<Props> = ({ navigation }) => {
  const nav = useNavigation();
  const routes = useRoute<RouteProp<ParamsList, 'ID'>>();
  const canBack = React.useMemo(() => navigation?.canGoBack(), [navigation])

  function getText(str: string = '') {
    if (str.length >= CHAR_LIMIT) return str.substring(0, CHAR_LIMIT) + '...';
    return str;
  }

  if (canBack) return (
    <Container>
      <Tap onPress={navigation?.goBack}>
        <Icon name="left" color="#fff" size={22} />
      </Tap>
      <Top>
        <Title>
          {getText(routes.params?.title)}
        </Title>
      </Top>
    </Container >
  )

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
