import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const VideoItem = ({data}) => {
  const {
    id,
    description,
    sources: uri,
    likes,
    comments,
    musicName,
    avatarUri,
    subTitle,
    thumb,
    title,
  } = data || {};

  const videoRef = useRef<VideoRef>(null);

  console.log('sources', uri);
  return (
    <View style={{flex: 1}}>
      <Video
        source={{uri}}
        ref={videoRef}
        onError={e => {
          console.log('errrrror', e);
        }}
        style={styles.video}
      />
    </View>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
