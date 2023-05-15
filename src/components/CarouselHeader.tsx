import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {ICONS} from '../themes/Images';
import {HIT_SLOP} from '../utils/Constant';
import LocalImage from './LocalImage';
import Text from './Text';
import {ICarouselHeader} from './types';

const CarouselHeader = ({title, subTitle, onPress, style}: ICarouselHeader) => {
  return (
    <View style={[styles.mainHeader, style]}>
      <View style={styles.title}>
        <Text type="bold-20" color={APP_COLORS.primary} style={styles.txtTitle}>
          {title}
        </Text>
        {subTitle && <Text type="normal-12">{subTitle}</Text>}
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={styles.btnViewAll}
        hitSlop={HIT_SLOP}>
        <Text type="normal-14" color={APP_COLORS.primary}>
          View all
        </Text>
        <LocalImage icon={ICONS.icArrowRight} tintColor={APP_COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default CarouselHeader;

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {marginTop: 12, paddingBottom: 8},
  txtTitle: {lineHeight: 24, marginBottom: 4},
  btnViewAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
