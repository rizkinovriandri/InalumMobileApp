import React from 'react';
import { useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Splash, Login, Home } from './pages';

const App = () => {
  const Stack = createStackNavigator();
  return (
      
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={NavDrawerScreen} />
        {/* <Stack.Screen name="Session4" component={Session4} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NavDrawer = createDrawerNavigator();
const NavDrawerScreen = () => (
  <NavDrawer.Navigator
      screenOptions={{
        headerShown: false
      }} 
      drawerType='front'
      initialRouteName="Home">
    <NavDrawer.Screen name="Home" component={Home} />
    <NavDrawer.Screen name="Setting" component={Home} />
    <NavDrawer.Screen name="Payment" component={Home} />
  </NavDrawer.Navigator>
);

export default App;