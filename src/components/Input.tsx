import React, {forwardRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SCREEN_WIDTH} from '../utils/Constant';
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
      <Text>{label || 'Email'}</Text>
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          style={[styles.inputStyle]}
          placeholder={placeHolder || 'Enter your email'}
          placeholderTextColor={placeHolderStyle}
        />
      </View>
      {error && <Text style={styles.error}>{error || 'Invalid Email'}</Text>}
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
  },
  inputStyle: {
    height: 34,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginTop: 8,
    marginLeft: 12,
  },
});
