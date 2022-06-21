import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import colors from '../theme/colors';

import CommentsScreen from '../screens/CommentsScreen';
import UserSearchScreen from '../screens/UserSearchScreen';

import {SearchTabNavigatorParamList} from './types';
const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  // safeArea context didn't work so I'm using this hook to get the top notch size to properly add padding
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {paddingTop: insets.top}, tabBarIndicatorStyle: {backgroundColor: colors.primary}}}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={CommentsScreen} />
    </Tab.Navigator>
  );
};
export default SearchTabNavigator;
