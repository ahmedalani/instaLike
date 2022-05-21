import React from 'react';
import {View, FlatList} from 'react-native';
// data
import comments from '../../assets/data/comments.json';
// component
import Comment from '../../components/Comment';

const CommentsScreen = () => {
  return (
    <View>
      <FlatList data={comments} renderItem={({item}) => <Comment comment={item} />} />
    </View>
  );
};

export default CommentsScreen;
