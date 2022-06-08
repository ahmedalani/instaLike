import React from 'react';
// import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import BottomTabNavigator from './BottomTabNavigator';
import CommentsScreen from '../screens/CommentsScreen';
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        {/* <Stack.Screen name="Feed" component={HomeScreen} options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}} /> */}
        {/* <Stack.Screen name="UserProfile" component={ProfileScreen} options={{title: 'Profile'}} /> */}
        <Stack.Screen name="Comments" component={CommentsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
