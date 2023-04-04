import React from 'react';
import {StyleSheet, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {SCREEN_WIDTH} from '../utils/Constant';
import {IDivider} from './types';

const Divider: React.FC<IDivider> = ({style, color = APP_COLORS.primary}) => {
  return <View style={[styles.main, {backgroundColor: color}, style]} />;
};

export default Divider;

const styles = StyleSheet.create({
  main: {
    width: SCREEN_WIDTH,
    height: 1,
  },
});
