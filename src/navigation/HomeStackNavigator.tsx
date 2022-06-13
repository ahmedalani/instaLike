import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from './types';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={HomeScreen} options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}} />
      <Stack.Screen name="UserProfile" component={ProfileScreen} options={{title: 'Profile'}} />
    </Stack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <View>
      {/* to do: style this to look more like the instagram logo */}
      <Text style={{fontSize: 30}}>InstaLike</Text>
    </View>
  );
};

export default HomeStackNavigator;
