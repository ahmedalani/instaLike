import React from 'react';
import {View, Text, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {ProfileNavigationProp} from '../../navigation/types';

import styles from './styles';
// dummy data
import user from '../../assets/data/user.json';
import Button from '../../components/Button';

const ProfileHeader = () => {
  const navigation = useNavigation<ProfileNavigationProp>();
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />
        {/* posts, followers, following number */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
      {/* header button */}
      <View style={{flexDirection: 'row'}}>
        <Button text={'edit profile'} onPress={() => navigation.navigate('EditProfile')} />
        <Button text={'another button'} onPress={() => console.warn('on another button')} />
      </View>
      {/* gridview posts */}
    </View>
  );
};

export default ProfileHeader;
