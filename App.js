import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './component/Login';
import Signup from './component/Signup';
import Menu from './component/Menu';
import Flex from './component/Flex';
import Sectionlist from './component/Sectionlist';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Flex" component={Flex} />
      <Drawer.Screen name="Sectionlist" component={Sectionlist} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;