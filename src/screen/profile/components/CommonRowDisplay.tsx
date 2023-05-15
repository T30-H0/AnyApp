import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LocalImage, Text} from '../../../components';
import APP_COLORS from '../../../themes/Colors';
import {ICONS} from '../../../themes/Images';
import {SCREEN_WIDTH} from '../../../utils/Constant';
import {ICommonRow} from './types';

const CommonRowDisplay = ({leftIcon, title}: ICommonRow) => {
  return (
    <TouchableOpacity style={styles.btnMain} activeOpacity={0.5}>
      <View style={styles.row}>
        <LocalImage
          icon={leftIcon}
          tintColor={APP_COLORS.primary}
          style={styles.leftIcon}
        />
        <Text type="bold-14" color={APP_COLORS.primary}>
          {title}
        </Text>
      </View>
      <LocalImage icon={ICONS.icArrowDown} />
    </TouchableOpacity>
  );
};

export default CommonRowDisplay;

const styles = StyleSheet.create({
  row: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  btnMain: {
    marginVertical: 8,
    borderBottomWidth: 1,
    paddingVertical: 10,
    borderColor: APP_COLORS.primary,
    width: SCREEN_WIDTH - 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
});
