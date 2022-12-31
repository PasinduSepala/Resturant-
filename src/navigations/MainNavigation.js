// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Splash';
import { navigations } from '../enum';
import Welcome from '../Welcome';
import Signup from '../Signup';
import Login from '../Login';
import Verify from '../Verify';
import Pass from '../Pass';
import MainTabNavigation from './MainTabNavigation';







const Stack = createNativeStackNavigator();

function MainNavigation() {
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
         <Stack.Screen
          name={navigations.TAB_HOME}
          component={MainTabNavigation}
          options={{headerShown: false}}
        />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default MainNavigation;