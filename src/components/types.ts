import {
  ColorValue,
  StyleProp,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';

export interface IInputProps {
  inputContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  label?: string;
  placeHolder?: string;
  placeHolderStyle?: ColorValue;
  error?: string;
  icon?: string;
}

export interface ITextProps {
  style?: StyleProp<TextStyle>;
  type?: string;
  props?: TextProps;
  children?: React.ReactNode;
  textAlign?: string;
  color?: string;
  numberOfLines?: number;
}

export interface IButtonProps {
  fill?: boolean;
  title: string;
  titleColor?: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  tittleStyle?: TextStyle;
  icon?: string;
  leftIcon?: string;
}

export interface IDivider {
  style?: ViewStyle;
  color?: string;
}

export interface IIconText {
  icon?: string;
  iconStyle?: StyleProp<ImageStyle>;
  tintColor?: string;
  style?: StyleProp<ViewStyle>;
  text: string;
  textType?: string;
}

export interface ICarouselHeader {
  title: string;
  onPress: () => void;
  subTitle?: string;
  style?: StyleProp<ViewStyle>;
}
export interface IBottomSheet {
  children?: React.ReactNode;
}
export interface IAView {
  children?: React.ReactNode;
  bgColor?: string;
  props?: ViewProps;
  style?: StyleProp<ViewStyle>;
}

export interface IToggleSwitch {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  title?: string;
  isSelected?: any;
}
