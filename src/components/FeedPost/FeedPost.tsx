import React from 'react';
import {Text, View, Image} from 'react-native';

// vector icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';

const FeedPost = () => {
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

export default FeedPost;
