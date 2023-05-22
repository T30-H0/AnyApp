import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {LocalImage, Text} from '../../components';
import ModeView from '../../components/ModeView';
import {useAppMode} from '../../hooks/useAppMode';
import APP_COLORS from '../../themes/Colors';
import {ICONS} from '../../themes/Images';

const Theme = () => {
  const {isLightMode, onSelectAppMode} = useAppMode();
  return (
    <ModeView style={styles.container}>
      <Text type="bold-16">Theme</Text>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={onSelectAppMode}
          activeOpacity={0.5}
          style={[styles.btnDark, styles.mainContent]}>
          <Text type="normal-16" color={APP_COLORS.black}>
            Dark
          </Text>
          {!isLightMode && (
            <LocalImage icon={ICONS.icTick} tintColor={APP_COLORS.black} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onSelectAppMode}
          activeOpacity={0.5}
          style={styles.mainContent}>
          <Text type="normal-16" color={APP_COLORS.black}>
            {' '}
            Light
          </Text>
          {isLightMode && <LocalImage icon={ICONS.icTick} />}
        </TouchableOpacity>
      </View>
    </ModeView>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  content: {
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    backgroundColor: APP_COLORS.greyL2,
  },
  btnDark: {
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 12,
    borderColor: APP_COLORS.mainGrey,
  },
  mainContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
