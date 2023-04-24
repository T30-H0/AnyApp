import React from 'react';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';
import {StyleProp} from 'react-native/types';
import APP_COLORS from '../themes/Colors';

const RemoteImage = ({
  props,
  icon,
  style,
  tintColor = APP_COLORS.primary,
}: {
  props?: FastImageProps;
  icon: any;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
}) => {
  return (
    <FastImage
      {...props}
      style={style}
      source={{uri: icon}}
      tintColor={tintColor}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default RemoteImage;
