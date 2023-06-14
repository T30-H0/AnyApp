import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {SCREEN_WIDTH} from '../utils/Constant';
import LocalImage from './LocalImage';
import Text from './Text';
import {IButtonProps} from './types';

const Button: React.FC<IButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  tittleStyle,
  fill = true,
  titleColor,
  icon,
  leftIcon,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        !fill && styles.btnOutLine,
        {backgroundColor: fill ? APP_COLORS.primary : APP_COLORS.white},
        buttonStyle,
      ]}
      onPress={onPress}>
      {icon && <LocalImage icon={icon} />}
      <View style={styles.txtTitle}>
        <Text
          type="bold-16"
          color={titleColor || APP_COLORS.white}
          style={tittleStyle}>
          {title}
        </Text>
      </View>
      {leftIcon && <LocalImage icon={leftIcon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    width: SCREEN_WIDTH - 40,
  },
  txtTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnOutLine: {
    borderWidth: 1,
    borderColor: APP_COLORS.primary,
  },
});

export default Button;
