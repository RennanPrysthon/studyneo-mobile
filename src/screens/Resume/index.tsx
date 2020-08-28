import React, { useContext } from 'react';

import { Linking } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Markdown from 'react-native-markdown-display';

import { showError } from '~/utils';

import { Container } from './styles';

import ResumeList from '~/components/ResumeList';
import ThemeContext from '~/contexts/themes';
import OverviewContext, { OverviewProvider } from './overview_context';
import Loading from '~/components/Loading';


interface Resume {
  content: string;
  id: number;
}

const Resume: React.FC = () => {
  const Content: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const { resume, loading } = useContext(OverviewContext);

    if (loading) return <Loading />
    return (
      <Container
        contentInsetAdjustmentBehavior="automatic"
      >
        <Markdown
          style={
            {
              text: {
                color: theme.texts,
                fontFamily: 'Rubik-Medium',
              },
              heading1: {
                fontSize: 32,
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
              },
              heading2: {
                fontSize: 24,

              },
              heading3: {
                fontSize: 18,

              },
              heading4: {
                fontSize: 16,

              },
              heading5: {
                fontSize: 13,
              },
              heading6: {
                fontSize: 11,
              },
              list_item: {
                color: theme.texts,
              }
            }
          }
          onLinkPress={str => {
            Linking.openURL(str).catch(err =>
              showError(`Endereço ${str} não pode ser encontrado`, "Erro ao abrir pagina web")
            );
            return false;
          }}
        >
          {resume.content}
        </Markdown>
      </Container >
    )
  }

  const Drawer = createDrawerNavigator();

  return (
    <OverviewProvider>
      <Drawer.Navigator
        drawerPosition="right"
        drawerContent={() => <ResumeList />}
        drawerType="slide"
        drawerStyle={{
          width: 200
        }}
      >
        <Drawer.Screen name="resume" component={Content} />
      </Drawer.Navigator>
    </OverviewProvider>
  )
}

export default Resume;
