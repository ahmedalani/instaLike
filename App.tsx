/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// vector icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://www.uptowneyecare.com/wp-content/uploads/2019/03/green-eyes.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>JamieHots</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      <Image
        source={{
          uri: 'https://www.uptowneyecare.com/wp-content/uploads/2019/03/green-eyes.jpg',
        }}
        style={styles.image}
      />
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>someUserName</Text> and{' '}
          <Text style={styles.bold}>66 others</Text>
        </Text>
        {/* post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>JamieHots</Text> this is a great post and
          you are the most for in the future this is a greatmost for in the
          future this is a greatmost for in the future this is a great
        </Text>
        {/* Comments */}
        <Text style={{color: colors.grey}}>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.bold}>someUser</Text> this is a great post and
            you are the most for in the future this is a great post and you are
            so.
          </Text>
          <AntDesign
            name={'hearto'}
            size={16}
            style={styles.icon}
            color={colors.black}
          />
        </View>
        {/* posted date */}
        <Text style={{color: colors.grey}}>19 April, 2022</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  text: {
    color: colors.black,
    lineHeight: 20,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    flex: 1,
    color: colors.black,
  },
});

export default App;
