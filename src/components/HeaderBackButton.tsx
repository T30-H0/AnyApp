import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LocalImage} from '.';
import {useAppMode} from '../hooks/useAppMode';
import {ICONS} from '../themes/Images';

const HeaderBackButton = () => {
  const {goBack} = useNavigation();
  const {appModeColor} = useAppMode();

  return (
    <TouchableOpacity onPress={goBack}>
      <LocalImage
        icon={ICONS.icArrowLeft}
        tintColor={appModeColor.mainColor}
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
