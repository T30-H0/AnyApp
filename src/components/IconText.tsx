import React from 'react';
import {StyleSheet, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import LocalImage from './LocalImage';
import Text from './Text';
import {IIconText} from './types';

const IconText = (props: IIconText) => {
  const {
    icon,
    style,
    text,
    tintColor = APP_COLORS.primary,
    textType,
    iconStyle,
  } = props;
  return (
    <View style={[style, styles.contentStyle]}>
      <LocalImage
        icon={icon}
        style={[styles.iconStyle, iconStyle]}
        tintColor={tintColor}
      />
      <Text numberOfLines={1} type={textType}>
        {text}
      </Text>
    </View>
  );
};

export default IconText;
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
