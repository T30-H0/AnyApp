import React from 'react';
import FastImage, {
  FastImageProps,
  ImageStyle,
  ResizeMode,
} from 'react-native-fast-image';
import {StyleProp} from 'react-native/types';

const RemoteImage = ({
  props,
  url,
  style,
  tintColor,
  resizeMode,
}: {
  props?: FastImageProps;
  url: any;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
}) => {
  return (
    <FastImage
      {...props}
      style={style}
      source={{uri: url}}
      tintColor={tintColor}
      resizeMode={resizeMode || FastImage.resizeMode.contain}
    />
  );
};

export default RemoteImage;
