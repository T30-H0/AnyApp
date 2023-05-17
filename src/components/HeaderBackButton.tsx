import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LocalImage} from '.';
import APP_COLORS from '../themes/Colors';
import {ICONS} from '../themes/Images';

const HeaderBackButton = () => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity onPress={goBack}>
      <LocalImage
        icon={ICONS.icArrowLeft}
        tintColor={APP_COLORS.black}
        style={styles.button}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
});

export default HeaderBackButton;
