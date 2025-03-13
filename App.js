import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* 主页面 */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'IS6144 Mock Math App' }}
        />
        {/* 结果页面 */}
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: 'Result Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}