import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import SideBar from '~/components/SideBar';
import Header from '~/components/Header';
import BackHeader from '~/components/BackHeader';

import QuestionList from '~/screens/QuestionList';
import QuestionDetail from '~/screens/QuestionDetail';
import MatterDetail from '~/screens/MatterDetail';
import SubjectDetail from '~/screens/SubjectDetail';
import Resume from '~/screens/Overviews';
import AreasList from '~/screens/AreasList';
import HomeScreen from '~/screens/HomeScreen';
import ConfigurationScreen from '~/screens/ConfigurationScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const QuestionsDatabaseStack = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen
      name="areasList"
      component={AreasList}
      options={{
        header: (props) => <Header props={props} />,
      }}
    />
    <Stack.Screen
      name="matterDetail"
      component={MatterDetail}
      options={{
        header: () => <BackHeader />,
      }}
    />
    <Stack.Screen
      name="subjectsDetail"
      component={SubjectDetail}
      options={{
        header: () => <BackHeader />,
      }}
    />
    <Stack.Screen
      name="questionList"
      component={QuestionList}
      options={{
        header: () => <BackHeader />,
      }}
    />
    <Stack.Screen
      name="questionDetail"
      component={QuestionDetail}
      options={{
        header: () => <BackHeader />,
      }}
    />
    <Stack.Screen
      name="overviewDetail"
      component={Resume}
      options={{
        header: () => <BackHeader />,
      }}
    />
  </Stack.Navigator>
);

const Configurations = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="configurationList"
      component={ConfigurationScreen}
      options={{
        header: (props) => <Header props={props} />,
      }}
    />
  </Stack.Navigator>
);

const Home = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="homeScreen"
      component={HomeScreen}
      options={{
        header: (props) => <Header props={props} />,
      }}
    />
  </Stack.Navigator>
);

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="home"
    drawerContent={({ navigation }) => <SideBar navigation={navigation} />}
  >
    {/* <Drawer.Screen name="home" component={Home} /> */}
    <Drawer.Screen name="questionsDatabase" component={QuestionsDatabaseStack} />
    {/* <Drawer.Screen name="configuration" component={Configurations} /> */}
  </Drawer.Navigator>
);

export default AppRoutes;
