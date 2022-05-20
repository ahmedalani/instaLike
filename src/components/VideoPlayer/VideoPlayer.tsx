import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../theme/colors';

interface IVideoPlayer {
  uri: string;
  paused: boolean;
}
const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);
  const [durationInSec, setDurationInSec] = useState(0);
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat={true}
        muted={muted}
        paused={paused}
        onProgress={e => setDurationInSec(Math.round(e.seekableDuration - e.currentTime))}
      />
      <View style={styles.duration}>
        <Text>{durationInSec}</Text>
      </View>
      <Pressable onPress={() => setMuted(currV => !currV)} style={styles.muteButton}>
        <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={14} color={colors.white} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  duration: {
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 25,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  muteButton: {
    backgroundColor: colors.grey,
    padding: 5,
    borderRadius: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
export default VideoPlayer;
