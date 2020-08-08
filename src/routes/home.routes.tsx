
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import QuestionsDatabase from '~/screens/QuestionsDatabase';

const Bottom = createMaterialBottomTabNavigator();

const BottomTabs: React.FC = () => (
  <Bottom.Navigator
    initialRouteName="QuestionsDatabaseTab"
    activeColor="#ffffff"
    inactiveColor="#fff8"
    barStyle={{ backgroundColor: '#00B5E2' }}
    labeled={false}
  >
    <Bottom.Screen name="QuestionsDatabase" component={QuestionsDatabase}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />
      }}
    />
  </Bottom.Navigator>
)

export default BottomTabs;
