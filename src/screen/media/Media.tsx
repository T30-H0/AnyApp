import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Videos} from '../../utils/Constant';
import VideoItem from './components/VideoItem';

const Media = () => {
  return (
    <View style={{flex: 1}}>
      <VideoItem data={Videos[1]} />
    </View>
  );
  // return (
  //   <FlatList
  //     data={Videos}
  //     pagingEnabled
  //     renderItem={({item, index}) => <VideoItem data={item} />}
  //   />
  // );
};

export default Media;

const styles = StyleSheet.create({});
