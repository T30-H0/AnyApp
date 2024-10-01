import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import APP_COLORS from '../../../themes/Colors';
import {SCREEN_WIDTH} from '../../../utils/Constant';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const RenderHot = () => {
  const [splitButton, setSplit] = useState(false);
  const rotation = useSharedValue(0);
  const splitBtnWidth = (SCREEN_WIDTH - 40) / 2;

  const splitBtnStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(splitButton ? splitBtnWidth : SCREEN_WIDTH - 40),
      backgroundColor: withTiming(
        splitButton ? APP_COLORS.pink : APP_COLORS.primary,
        {
          duration: 300,
        },
      ),
    };
  }, [splitButton]);

  const leftBtnStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(splitButton ? splitBtnWidth : 0, {duration: 300}),
    };
  }, [splitButton]);

  const cancelRNStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(splitButton ? 1 : 0, {duration: 400}),
        },
      ],
    };
  }, [splitButton]);

  const rotateBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    };
  });

  const onRotate = () => {
    const newRotation = rotation.value + 180;
    rotation.value = withTiming(
      newRotation,
      {
        duration: 500,
        easing: Easing.sin,
      },
      () => {
        rotation.value = 0;
      },
    );
  };

  return (
    <View>
      <View style={[styles.container, {gap: splitButton ? 12 : 0}]}>
        <AnimatedTouchableOpacity
          onPress={() => setSplit(!splitButton)}
          activeOpacity={0.8}
          style={[styles.btnSubmit, leftBtnStyle]}>
          <Animated.Text style={[styles.txtTitle, cancelRNStyle]}>
            Cancel
          </Animated.Text>
        </AnimatedTouchableOpacity>

        <AnimatedTouchableOpacity
          onPress={() => setSplit(true)}
          activeOpacity={0.8}
          style={[styles.btnSubmit, splitBtnStyle]}>
          <Text style={styles.txtTitle}>{splitButton ? 'Submit' : 'Save'}</Text>
        </AnimatedTouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <AnimatedTouchableOpacity
          activeOpacity={0.8}
          onPress={onRotate}
          style={[styles.button, rotateBtnStyle]}
        />
        <View style={styles.textContainer} pointerEvents="none">
          <Text style={styles.txtTitle}>Rotate Me</Text>
        </View>
      </View>
    </View>
  );
};

export default RenderHot;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  btnSubmit: {
    height: 48,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: APP_COLORS.primary,
  },
  txtTitle: {
    color: APP_COLORS.white,
    fontWeight: '600',
    fontSize: 14,
  },
  //
  button: {
    backgroundColor: '#3498db',
    height: 48,
    borderRadius: 15,
    width: SCREEN_WIDTH / 2,
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  textContainer: {
    top: 12,
    alignSelf: 'center',
    position: 'absolute',
  },
});
