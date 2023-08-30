import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LocalImage} from '../../components';
import {SCREEN} from '../../navigation/Screen';
import APP_COLORS from '../../themes/Colors';
import {ICONS} from '../../themes/Images';

const Activities = () => {
  const navigation = useNavigation<any>();

  const onAddPost = () => {
    navigation.navigate(SCREEN.CAM_VIDEO_RECORDER);
  };

  return (
    <>
      <TouchableOpacity style={styles.btnPlus} onPress={onAddPost}>
        <LocalImage
          image={ICONS.icCameraWithHeart}
          style={styles.icPlus}
          tintColor={APP_COLORS.darkPink}
        />
      </TouchableOpacity>
    </>
  );
};

export default Activities;

const styles = StyleSheet.create({
  btnPlus: {
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
  icPlus: {
    width: 48,
    height: 48,
  },
});
