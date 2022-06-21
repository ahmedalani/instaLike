import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

import {UserSearchNavigationProp} from '../../navigation/types';
import {IUser} from '../../types/models';
interface IUserLIstItem {
  user: IUser;
}
const UserListItem = ({user}: IUserLIstItem) => {
  const navigation = useNavigation<UserSearchNavigationProp>();

  const goToUserScreen = () => {
    navigation.navigate('UserProfile', {userId: user.id});
  };
  return (
    <Pressable onPress={goToUserScreen} style={styles.root}>
      <Image source={{uri: user.image}} style={styles.image} />

      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: fonts.weight.bold,
    marginBottom: 2,
  },
  username: {
    color: colors.grey,
  },
});
export default UserListItem;
