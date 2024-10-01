import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import APP_COLORS from '../../../themes/Colors';
import {SCREEN_WIDTH} from '../../../utils/Constant';

type NewsTabProps = {
  options: string[];
  selectedTab: string;
  onTabPress: (option: string) => void;
};
const NewsTab = ({options, selectedTab, onTabPress}: NewsTabProps) => {
  const itemWidth = (SCREEN_WIDTH - 40) / options.length;

  const boxStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(itemWidth * options.indexOf(selectedTab)),
    };
  }, [selectedTab, options]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.activeBox,
          boxStyle,
          {
            width: itemWidth - 20,
          },
        ]}
      />

      {options?.map(option => (
        <Pressable
          key={option}
          onPress={() => onTabPress(option)}
          style={[styles.item, {width: itemWidth}]}>
          <Text key={option}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default React.memo(NewsTab);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 48,
    width: SCREEN_WIDTH - 40,
    borderRadius: 16,
    backgroundColor: APP_COLORS.greyL2,
  },
  activeBox: {
    borderRadius: 12,
    position: 'absolute',
    height: '80%',
    top: '10%',
    marginLeft: 10,
    backgroundColor: APP_COLORS.white,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
