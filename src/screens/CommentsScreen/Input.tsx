import React, {useState} from 'react';
import {View, Image, TextInput, Text, StyleSheet} from 'react-native';

import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => {
    if (newComment) {
      console.warn(newComment);
      setNewComment('');
    }
  };

  return (
    <View style={styles.root}>
      {/* avatar */}
      <Image style={styles.image} source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg'}} />
      {/* input field */}
      <TextInput style={styles.input} placeholder="type your comment..." value={newComment} onChangeText={setNewComment} multiline />
      {/* post button */}
      <Text style={styles.button} onPress={onPost}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: colors.border,
    marginBottom: 5,
    alignItems: 'flex-end',
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 50,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});
export default Input;
