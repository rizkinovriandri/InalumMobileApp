import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash, Login, Home } from './pages';

const App = () => {
  const Stack = createStackNavigator();
  return (
      
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName="Landing">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Session4" component={Session4} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;