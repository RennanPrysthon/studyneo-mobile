import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../pages/Home';
import Header from '../components/Header';
import Login from '../pages/Login';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Bottom = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabs: React.FC = () => (
  <Bottom.Navigator
    initialRouteName="Home"
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
    <Bottom.Screen name="SettingTab" component={Login}
      options={{
        tabBarIcon: ({ color }) => <Icon name="description" size={25} color={color} />
      }}
    />
  </Bottom.Navigator>
)

const AppBottom: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      header: ({ scene, previous, navigation }) => (<Header />)
    }}
  >
    <Stack.Screen name="Home" component={BottomTabs} />
  </Stack.Navigator>
);

export default AppBottom;
