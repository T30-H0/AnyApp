import React from 'react';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';
import {StyleProp} from 'react-native/types';

const RemoteImage = ({
  props,
  url,
  style,
  tintColor,
}: {
  props?: FastImageProps;
  url: any;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
}) => {
  return (
    <FastImage
      {...props}
      style={style}
      source={{uri: url}}
      tintColor={tintColor}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default RemoteImage;
