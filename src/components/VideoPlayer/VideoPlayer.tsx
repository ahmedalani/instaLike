import {View, Text} from 'react-native';
import React from 'react';

interface IVideoPlayer {
  uri: string;
}
const VideoPlayer = ({uri}: IVideoPlayer) => {
  console.log(uri);
  return (
    <View>
      <Text>VideoPlayer</Text>
    </View>
  );
};

export default VideoPlayer;
