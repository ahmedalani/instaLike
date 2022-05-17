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
import {StyleSheet, ScrollView} from 'react-native';

import FeedPost from './src/components/FeedPost';

import {IPost} from './src/types/models';
const post: IPost = {
  id: '1',
  createdAt: '19 December 2021',
  image:
    'https://www.uptowneyecare.com/wp-content/uploads/2019/03/green-eyes.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: '1-jamieHots',
    image:
      'https://www.uptowneyecare.com/wp-content/uploads/2019/03/green-eyes.jpg',
    username: 'JamieHots',
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        id: '1-jamieHots',
        username: 'jamieHots',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: '2-markFox',
        username: 'markFox',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    marginTop: 25,
  },
});

export default App;
