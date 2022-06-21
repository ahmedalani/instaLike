import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../theme/colors';
// screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
// navigation stacks
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import SearchTabNavigator from './SearchTopNavigator';
// types
import {BottomTabNavigatorParamList} from './types';
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: colors.primary}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{headerShown: false, tabBarIcon: ({color, size}) => <MaterialIcons name="home-filled" size={size} color={color} />}}
      />
      <Tab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{headerShown: false, tabBarIcon: ({color, size}) => <MaterialIcons name="search" size={size} color={color} />}}
      />
      <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="plus-circle-outline" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="heart-outline" size={size} color={color} />}}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{headerShown: false, tabBarIcon: ({color, size}) => <FontAwesome name="user-circle-o" size={size} color={color} />}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
