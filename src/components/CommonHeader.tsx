import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {ICONS} from '../themes/Images';
import {HIT_SLOP} from '../utils/Constant';
import LocalImage from './LocalImage';

const CommonHeader = () => {
  const navigation = useNavigation<any>();
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity hitSlop={HIT_SLOP} style={styles.btn} onPress={onBack}>
        <LocalImage
          tintColor={APP_COLORS.primary}
          icon={ICONS.icArrowBack}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity hitSlop={HIT_SLOP} style={styles.btn}>
          <LocalImage
            tintColor={APP_COLORS.primary}
            icon={ICONS.icShare}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          hitSlop={HIT_SLOP}
          style={[styles.btn, styles.marLeft12]}>
          <LocalImage
            tintColor={APP_COLORS.primary}
            icon={ICONS.icHeartOutLine}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center'},
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  icon: {
    width: 20,
    height: 20,
  },
  btn: {
    backgroundColor: `${APP_COLORS.white}90`,
    padding: 8,
    borderRadius: 20,
  },
  marLeft12: {marginLeft: 12},
});
