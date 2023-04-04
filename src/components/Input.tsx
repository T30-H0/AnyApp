import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {SCREEN_WIDTH} from '../utils/Constant';
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
      <Text type="bold-14">{label || 'Email'}</Text>
      <View
        style={[
          styles.inputContainer,
          error ? {borderColor: APP_COLORS.red} : {},
          inputContainerStyle,
        ]}>
        <TextInput
          style={[styles.inputStyle]}
          placeholder={placeHolder || 'Enter your email'}
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
  container: {},
  inputContainer: {
    marginTop: 4,
    height: 38,
    paddingVertical: 1,
    borderWidth: 1,
    borderRadius: 6,
    width: SCREEN_WIDTH - 40,
    borderColor: APP_COLORS.primary,
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
