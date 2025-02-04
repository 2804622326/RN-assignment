import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'; // 修正导入路径（无 .js 后缀）
import NewPage from './NewPage';   // 修正导入路径

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomePage} 
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen 
          name="NewPage" 
          component={NewPage} 
          options={{ title: 'New Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}