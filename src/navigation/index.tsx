import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import {View, Text} from 'react-native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Feed" component={HomeScreen} options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}} />
        <Stack.Screen name="UserProfile" component={ProfileScreen} options={{title: 'Profile'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <View>
      {/* to do: style this to look more like the instagram logo */}
      <Text>InstaLike</Text>
    </View>
  );
};
export default Navigation;
