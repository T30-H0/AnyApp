import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {SkeletonComponentProps} from './types';

const Skeleton = (SkeletonProps: SkeletonComponentProps) => {
  const {width, height, borderRadius} = SkeletonProps;
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    const animationLoop = Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      }),
    );

    animationLoop.start();

    return () => {
      animationLoop.stop();
    };
  }, [animation]);

  const translateX = animation?.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  return (
    <View style={[styles.skeletonContainer, {width, height, borderRadius}]}>
      <Animated.View
        style={[
          styles.skeleton,
          {
            transform: [{translateX}],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skeletonContainer: {
    overflow: 'hidden',
  },
  skeleton: {
    width: '100%',
    height: '100%',
    backgroundColor: APP_COLORS.white,
  },
});

export default Skeleton;
