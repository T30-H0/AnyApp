import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {height, width} = Dimensions.get('window');

export const COMMON_CONTAINER_STYLE = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const HAS_NOTCH = DeviceInfo.hasNotch();
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const HIT_SLOP = {top: 10, right: 10, bottom: 10, left: 10};
