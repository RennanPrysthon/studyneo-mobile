import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
import AppBottom from './bottom.routes';
import SideBar from '~/components/SideBar';

const Drawer = createDrawerNavigator();

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={() => <SideBar />}
  >
    <Drawer.Screen name="Home" component={AppBottom} />
  </Drawer.Navigator>
);

export default AppRoutes;
