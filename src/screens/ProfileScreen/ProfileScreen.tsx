import React, {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

// componenets
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
// dummy data
import user from '../../assets/data/user.json';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const userId = route.params?.userId;
  console.log('ProfileScreen: userId: ', userId);

  useEffect(() => {
    // query user data using the userId
    // set username as title screen
    navigation.setOptions({title: user.username});
  }, [navigation, route]);

  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
