import React from 'react';
import FastImage, {FastImageProps, ImageStyle} from 'react-native-fast-image';
import {StyleProp} from 'react-native/types';
import APP_COLORS from '../themes/Colors';

const LocaLImage = ({
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
      style={style}
      source={icon}
      tintColor={APP_COLORS.primary}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default LocaLImage;
