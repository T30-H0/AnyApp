import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';
import {StyleProp} from 'react-native/types';

const LocalImage = ({
  props,
  icon,
  style,
}: {
  props?: FastImageProps;
  icon: any;
  style?: StyleProp<ImageStyle>;
}) => {
  return (
    <FastImage
      {...props}
      style={[styles.main, style]}
      source={icon}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default LocalImage;
const styles = StyleSheet.create({
  main: {
    width: 24,
    height: 24,
  },
});