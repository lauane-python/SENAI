import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_700Bold
} from '@expo-google-fonts/josefin-sans';
import { View, ActivityIndicator } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import CadastroScreen from './src/Screens/CadastroScreen';
import LoginScreen from './src/Screens/LoginScreen';
import CriarTarefaScreen from './src/Screens/CriarTarefaScreen';
import SplashScreen from './src/Screens/SplashScreen';
const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold,
  });
  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor:"#f2e9e1"
        }}
      >
        <ActivityIndicator size="large" color="#804256"/>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="CadastroScreen" component={CadastroScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="CriarTarefaScreen" component={CriarTarefaScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}