import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BottomTabNavigatorParamList} from './types';

import colors from '../theme/colors';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import PostUploadScreen from '../screens/PostUploadScreen';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

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
        component={HomeScreen}
        options={{tabBarIcon: ({color, size}) => <MaterialIcons name="search" size={size} color={color} />}}
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
