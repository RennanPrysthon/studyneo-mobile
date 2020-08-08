import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import Header from '~/components/Header';

import MatterDetail from '~/screens/MatterDetail';
import QuestionList from '~/screens/QuestionList';
import QuestionDetail from '~/screens/QuestionDetail';
import SubjectDetail from '~/screens/SubjectDetail';
import Resume from '~/screens/Overviews';
import QuestionsDatabase from '~/screens/QuestionsDatabase';

const Stack = createStackNavigator();

const AppBottom: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ navigation }) => <Header navigation={navigation} />
    }}
    headerMode="screen"
  >
    <Stack.Screen name="home" component={QuestionsDatabase} />
    <Stack.Screen name="questionList" component={QuestionList} />
    <Stack.Screen name="questionDetail" component={QuestionDetail} />
    <Stack.Screen name="matterDetail" component={MatterDetail} />
    <Stack.Screen name="subjectsDetail" component={SubjectDetail} />
    <Stack.Screen name="overviewDetail" component={Resume} />

  </Stack.Navigator>
);

export default AppBottom;
