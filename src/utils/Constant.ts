import {Dimensions, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {ILanguage} from './types';
const {height, width} = Dimensions.get('window');

export const COMMON_CONTAINER_STYLE = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const HAS_NOTCH = DeviceInfo.hasNotch();
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const IS_ANDROID = Platform.OS === 'android';
export const HIT_SLOP = {top: 10, right: 10, bottom: 10, left: 10};

export const LANGUAGES: ILanguage[] = [
  {label: 'English', value: 'en'},
  {label: 'Việt Nam', value: 'vi'},
];
