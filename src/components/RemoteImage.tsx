import React from 'react';
// import FastImage, {
//   FastImageProps,
//   ImageStyle,
//   ResizeMode,
// } from 'react-native-fast-image';
import {Image} from 'react-native';
import {ImageProps, ImageStyle, StyleProp} from 'react-native/types';

const RemoteImage = ({
  props,
  url,
  style,
  tintColor,
}: // resizeMode,
{
  props?: ImageProps;
  url: any;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
  // resizeMode?: ResizeMode;
}) => {
  return (
    <Image
      {...props}
      style={style}
      source={{uri: url}}
      // tintColor={tintColor}
      // resizeMode={resizeMode}
    />
  );
};

export default RemoteImage;
