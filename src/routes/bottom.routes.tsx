import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import BottomTabs from './home.routes';
import Header from '../components/Header';

import SubjectDetail from '../pages/SubjectDetail';
import QuestionList from '../pages/QuestionList';
import QuestionDetail from '../pages/QuestionDetail';

const Stack = createStackNavigator();

const AppBottom: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ navigation }) => <Header navigation={navigation} />
    }}
    headerMode="screen"
  >
    <Stack.Screen name="home" component={BottomTabs} />
    <Stack.Screen name="subjectsDetail" component={SubjectDetail} />
    <Stack.Screen name="questionList" component={QuestionList} />
    <Stack.Screen name="questionDetail" component={QuestionDetail} />
  </Stack.Navigator>
);

export default AppBottom;
