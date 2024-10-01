import React from 'react';
import {
  Animated,
  Image,
  ImageProps,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';

type LocalImageProps = {
  props?: ImageProps;
  image: any;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
};

const AnimatedImage = Animated.createAnimatedComponent(Image);

const LocalImage: React.FC<LocalImageProps> = ({props, image, style}) => {
  return (
    <AnimatedImage {...props} style={[styles.main, style]} source={image} />
  );
};

export default LocalImage;

const styles = StyleSheet.create({
  main: {
    width: 14,
    height: 14,
  },
});
