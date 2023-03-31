import {
  ColorValue,
  StyleProp,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface IInputProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  label?: string;
  placeHolder?: string;
  placeHolderStyle?: ColorValue;
  error?: string;
}

export interface ITextProps {
  style?: StyleProp<TextStyle>;
  type: string;
  props?: TextProps;
  children: string | number;
}
