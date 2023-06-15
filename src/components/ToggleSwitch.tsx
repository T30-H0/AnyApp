import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {IToggleSwitch} from './types';

const ToggleSwitch = (toggleProps: IToggleSwitch) => {
  const {onPress, title, style, isSelected} = toggleProps;
  return (
    <View style={[styles.toggleContainer, style]}>
      <View style={styles.titleView}>
        <Text style={styles.textDesc}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btnToggle, isSelected && styles.backgroundColor]}>
        <View style={[styles.toggle, isSelected ? styles.activeToggle : {}]} />
      </TouchableOpacity>
    </View>
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({
  toggleContainer: {flexDirection: 'row', marginTop: 4},
  titleView: {flex: 1, marginRight: 12},
  backgroundColor: {backgroundColor: APP_COLORS.primary},
  btnToggle: {
    width: 40,
    height: 24,
    borderRadius: 12,
    paddingHorizontal: 4,
    justifyContent: 'center',
    backgroundColor: APP_COLORS.neutralBlue,
  },
  toggle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: APP_COLORS.white,
  },
  textDesc: {lineHeight: 24},
  activeToggle: {backgroundColor: APP_COLORS.white, alignSelf: 'flex-end'},
});
