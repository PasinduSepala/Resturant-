// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Splash';
import { navigations } from './src/enum';
import Welcome from './src/Welcome';
import Signup from './src/Signup';
import Login from './src/Login';
import Verify from './src/Verify';
import Pass from './src/Pass';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={navigations.Splash}>
        <Stack.Screen name={navigations.Splash}
         component={Splash}
         options={{headerShown:false}} />
         <Stack.Screen name={navigations.Welcome}
         component={Welcome}
         options={{headerShown:false}} />
          <Stack.Screen name={navigations.Signup}
         component={Signup}
         options={{headerShown:false}} />
          <Stack.Screen name={navigations.Login}
         component={Login}
         options={{headerShown:false}} />
         <Stack.Screen name={navigations.Verify}
         component={Verify}
         options={{headerShown:false}} />
         <Stack.Screen name={navigations.Pass}
         component={Pass}
         options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;