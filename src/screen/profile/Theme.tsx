import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {LocalImage, Text} from '../../components';
import {setAppMode} from '../../redux/appRedux';
import {AppDispatch, RootState} from '../../redux/store';
import APP_COLORS from '../../themes/Colors';
import {ICONS} from '../../themes/Images';

const Theme = () => {
  const dispatch: AppDispatch = useDispatch();
  const appMode = useSelector((state: RootState) => state.app.appMode);
  console.log('appMode', appMode);

  const onSelectAppMode = (mode: string) => {
    dispatch(setAppMode(mode));
  };

  return (
    <View style={styles.container}>
      <Text type="bold-16">Theme</Text>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => onSelectAppMode('dark')}
          activeOpacity={0.5}
          style={[styles.btnDark, styles.mainContent]}>
          <Text type="normal-16">Dark</Text>
          <LocalImage icon={ICONS.icTick} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSelectAppMode('light')}
          activeOpacity={0.5}
          style={styles.mainContent}>
          <Text type="normal-16">Light</Text>
          <LocalImage icon={ICONS.icTick} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  content: {
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
    backgroundColor: APP_COLORS.white,
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
