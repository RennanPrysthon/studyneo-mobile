
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '~/screens/Home';

const Bottom = createMaterialBottomTabNavigator();

const BottomTabs: React.FC = () => (
  <Bottom.Navigator
    initialRouteName="HomeTab"
    activeColor="#ffffff"
    inactiveColor="#fff8"
    barStyle={{ backgroundColor: '#00B5E2' }}
    labeled={false}
  >
    <Bottom.Screen name="HomeTab" component={Home}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />
      }}
    />
  </Bottom.Navigator>
)

export default BottomTabs;
