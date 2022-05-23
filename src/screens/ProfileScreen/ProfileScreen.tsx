import React from 'react';
// componenets
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
// dummy data
import user from '../../assets/data/user.json';

const ProfileScreen = () => {
  return <FeedGridView data={user.posts} ListHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
