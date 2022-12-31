import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';
import Home from '../Home';

import Welcome from '../Welcome';

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name= "Home" 
               component={Home} 

                    options={{ tabBarBadge: 3,headerShown:false,tabBarShowLabel:false }}/>
      <Tab.Screen name="Welcome"
           component={Welcome}
                 options={{tabBarBadge:4 ,headerShown:false,tabBarShowLabel:false ,tabBarActiveTintColor:"black" ,tabBarInactiveTintColor:"black"}} />
    </Tab.Navigator>
  );
}
export default MainTabNavigation;