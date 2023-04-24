import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {ICONS} from '../themes/Images';
import {SCREEN_WIDTH} from '../utils/Constant';
import LocalImage from './LocalImage';
import Text from './Text';
import {IInputProps} from './types';

const Input = forwardRef((props: IInputProps, _ref) => {
  const {
    label,
    placeHolder,
    error,
    placeHolderStyle,
    inputContainerStyle,
    style,
  } = props;
  return (
    <View style={[styles.container, style]}>
      {label && <Text type="bold-14">{label || 'Email'}</Text>}
      <View
        style={[
          styles.inputContainer,
          error ? {borderColor: APP_COLORS.red} : {},
          inputContainerStyle,
        ]}>
        <LocalImage
          icon={ICONS.icSearch}
          style={styles.icon}
          tintColor={APP_COLORS.primary}
        />
        <TextInput
          style={[styles.inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor={placeHolderStyle}
        />
      </View>
      {error && (
        <Text color={APP_COLORS.red} style={styles.error}>
          {error || 'Invalid Email'}
        </Text>
      )}
    </View>
  );
});

export default Input;

const styles = StyleSheet.create({
  container: {
    backgroundColor: APP_COLORS.white,
  },
  inputContainer: {
    marginTop: 4,
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    width: SCREEN_WIDTH - 40,
    borderColor: APP_COLORS.primary,
  },
  icon: {
    width: 20,
    height: 20,
  },
  inputStyle: {
    height: 34,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  error: {
    marginTop: 8,
    marginLeft: 12,
  },
});
