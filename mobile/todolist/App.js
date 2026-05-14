import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import CadastroScreen from './src/Screens/CadastroScreen';
import LoginScreen from './src/Screens/LoginScreen';
import CriarTarefaScreen from './src/Screens/CriarTarefaScreen';
import SplashScreen from './src/Screens/SplashScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CriarTarefaScreen" component={CriarTarefaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}