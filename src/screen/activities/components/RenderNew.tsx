import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import APP_COLORS from '../../../themes/Colors';
import {SCREEN_WIDTH} from '../../../utils/Constant';

const timimgConfig = {
  duration: 80,
};

const RenderNew = () => {
  const [num, setNum] = useState(0);
  const tranx = useSharedValue(0);

  const onPlus = () => {
    setNum(num + 1);
  };

  const onMinus = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      tranx.value = withSequence(
        withTiming(5, timimgConfig),
        withRepeat(withTiming(-5, timimgConfig), 3, true),
        withSpring(0, {
          mass: 0.5,
        }),
      );
    }
  };

  const transAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: tranx.value,
        },
      ],
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.txtNum,
            {color: num === 0 ? APP_COLORS.red : null},
            transAnimatedStyle,
          ]}>
          {num}
        </Animated.Text>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPlus}
          style={styles.btnLayout}>
          <Text style={styles.txtMathSymbol}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onMinus}
          style={styles.btnLayout}>
          <Text style={styles.txtMathSymbol}>-</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RenderNew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtNum: {
    fontSize: 36,
    fontWeight: '700',
  },
  btnView: {
    paddingBottom: 40,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnLayout: {
    width: 48,
    height: 48,
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: APP_COLORS.black,
  },
  txtMathSymbol: {
    fontSize: 40,
    fontWeight: '500',
    color: APP_COLORS.white,
  },
});
