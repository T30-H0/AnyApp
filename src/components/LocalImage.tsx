import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';
import {StyleProp} from 'react-native/types';

const LocalImage = ({
  props,
  image,
  style,
  tintColor,
}: {
  props?: FastImageProps;
  image: any;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
}) => {
  return (
    <FastImage
      {...props}
      style={[styles.main, style]}
      source={image}
      tintColor={tintColor}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default LocalImage;
const styles = StyleSheet.create({
  main: {
    width: 14,
    height: 14,
  },
});
