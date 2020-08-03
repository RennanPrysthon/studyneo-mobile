import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import BottomTabs from './home.routes';
import Header from '../components/Header';

import MatterDetail from '../pages/MatterDetail';
import QuestionList from '../pages/Questions/QuestionList';
import QuestionDetail from '../pages/Questions/QuestionDetail';
import SubjectDetail from '../pages/SubjectDetail';

const Stack = createStackNavigator();

const AppBottom: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ navigation }) => <Header navigation={navigation} />
    }}
    headerMode="screen"
  >
    <Stack.Screen name="home" component={BottomTabs} />
    <Stack.Screen name="questionList" component={QuestionList} />
    <Stack.Screen name="questionDetail" component={QuestionDetail} />
    <Stack.Screen name="matterDetail" component={MatterDetail} />
    <Stack.Screen name="subjectsDetail" component={SubjectDetail} />

  </Stack.Navigator>
);

export default AppBottom;
