import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/router/Router';
import Calculator from '@/src/Calculator';
import Checkers from '@/src/Checkers';
import Clicker from '@/src/Clicker';
import Weather from '@/src/weather';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Calculator" component={Calculator} />
          <Stack.Screen name="Checkers" component={Checkers} />
          <Stack.Screen name="Clicker" component={Clicker} />
          <Stack.Screen name="Weather" component={Weather} />

        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>

  );
}
