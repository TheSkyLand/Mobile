import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/src/RouterPage';
import Calculator from '@/src/calculator';
import Checkers from '@/src/checkers';
import Clicker from '@/src/clicker';
import Weather from '@/src/weather';
import CalculatorTest from '@/src/calculatorPage';
import CalculatorPage from '@/src/calculatorPage';



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
          <Stack.Screen name="CalculatorTest" component={CalculatorPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>

  );
}
