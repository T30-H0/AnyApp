import {StyleProp, ViewStyle} from 'react-native';
import {IUser} from '../../../redux/types';

export interface ICommonRow {
  leftIcon: string;
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export interface IProfileSnapshot {
  style?: StyleProp<ViewStyle>;
  user?: IUser;
}
