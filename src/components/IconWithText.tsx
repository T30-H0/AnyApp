import React from 'react';
import {StyleSheet, View} from 'react-native/types';
import APP_COLORS from '../themes/Colors';
import LocalImage from './LocalImage';
import Text from './Text';
import {IIconWithText} from './types';

const RenderIconWithText = (props: IIconWithText) => {
  const {icon, style, text} = props;
  return (
    <View style={[style, styles.contentStyle]}>
      <LocalImage
        icon={icon}
        style={styles.iconStyle}
        tintColor={APP_COLORS.primary}
      />
      <Text numberOfLines={1}>{text}</Text>
    </View>
  );
};

export default RenderIconWithText;
const styles = StyleSheet.create({
  contentStyle: {
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
});
