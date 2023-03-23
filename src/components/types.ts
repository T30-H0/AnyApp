import {ColorValue, StyleProp, ViewStyle} from 'react-native';

export interface IInputProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  label?: string;
  placeHolder?: string;
  placeHolderStyle?: ColorValue;
  error?: string;
}
