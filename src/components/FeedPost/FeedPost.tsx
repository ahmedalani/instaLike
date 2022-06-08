import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// vector icons
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../theme/colors';

// components
import Comment from '../Comment';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';

import {IPost} from '../../types/models';
interface IFeedPost {
  post: IPost;
  isVisible?: boolean;
}
const FeedPost = ({post, isVisible}: IFeedPost) => {
  // states:
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<Boolean>(false);
  const [isLiked, setIsLiked] = useState<Boolean>(false);

  const navigation = useNavigation();
  const navigateToUser = () => {
    console.log('feedPost: ', post.user);
    navigation.navigate('UserProfile', {userId: post?.user?.id});
  };
  // helper Functions:
  // expand or contrast the post description
  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(currV => !currV);
  };
  // set or unset the like for the post
  const toggleLike = () => {
    setIsLiked(currV => !currV);
  };

  // navigation function to navigate to post comments
  const navigateToComments = () => {
    navigation.navigate("Comments", {postId: post.id});
  };

  // this logic will be refactored soon but for now it handle content (post images) if there is multiple images we render flatlist
  // otherwise we render single Image node
  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    // pass down the toggleLike function to be handled through the flatlist otherwise the flatlist won't scroll because the doublePressable
    // componenet will handle touch before flatlist
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user?.image,
          }}
          style={styles.userAvatar}
        />
        <Text onPress={navigateToUser} style={styles.userName}>
          {post.user?.username}
        </Text>
        <Entypo name="dots-three-horizontal" size={16} style={styles.threeDots} />
      </View>
      {/* Content */}
      {content}
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign name={isLiked ? 'heart' : 'hearto'} size={24} style={styles.icon} color={isLiked ? colors.accent : colors.black} />
          </Pressable>
          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} color={colors.black} />
          <Feather name="send" size={24} style={styles.icon} color={colors.black} />
          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} color={colors.black} />
        </View>
        {/* Likes */}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>someUserName</Text> and <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>
        {/* post description */}
        <Text style={styles.text} onPress={toggleDescriptionExpanded} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{post.user?.username}</Text> {post.description}
        </Text>
        {/* Comments */}
        <Text onPress={navigateToComments} style={{color: colors.grey}}>View all {post.nofComments} comments</Text>
        {post.comments?.map(c => {
          return <Comment key={c.id} comment={c} />;
        })}
        {/* posted date */}
        <Text style={{color: colors.grey}}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
