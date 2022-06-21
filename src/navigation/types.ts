import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

// root stack types
export type RootNavigatorParamList = {
  Home: undefined;
  Comments: {postId: string};
};

// Search tabBar typs
export type SearchTabNavigatorParamList = {
  Users: undefined;
  Posts: undefined;
};
// BottomTab typs
export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  Search: undefined;
  Upload: undefined;
  Notifications: undefined;
  MyProfile: undefined;
};
export type MyProfileNavigationProp = BottomTabNavigationProp<BottomTabNavigatorParamList, 'MyProfile'>;
export type MyProfileRouteProp = RouteProp<BottomTabNavigatorParamList, 'MyProfile'>;

// home stack types
export type HomeStackNavigatorParamList = {
  Feed: undefined;
  UserProfile: {userId: string};
  Comments: RootNavigatorParamList['Comments'];
};
// stack prop
export type FeedNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'Feed'>;
export type UserProfileNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'UserProfile'>;
export type UserSearchNavigationProp = NativeStackNavigationProp<HomeStackNavigatorParamList, 'UserProfile'>;
// route prop
export type UserProfileRouteProp = RouteProp<HomeStackNavigatorParamList, 'UserProfile'>;

// profile stack types
export type ProfileStackNavigatorParamList = {
  Profile: undefined;
  EditProfile: undefined;
};
export type ProfileNavigationProp = NativeStackNavigationProp<ProfileStackNavigatorParamList, 'Profile'>;
