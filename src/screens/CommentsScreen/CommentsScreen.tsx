import React from 'react';
import {View, FlatList} from 'react-native';
// data
import comments from '../../assets/data/comments.json';
// component
import Comment from '../../components/Comment';
import Input from './Input';

const CommentsScreen = () => {
  return (
    <View style={{flex: 1, marginVertical: 5}}>
      <FlatList data={comments} renderItem={({item}) => <Comment comment={item} includeDetails />} style={{padding: 10}} />
      <Input />
    </View>
  );
};

export default CommentsScreen;
