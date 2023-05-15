import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LocalImage} from '../../components';
import APP_COLORS from '../../themes/Colors';
import {ICONS} from '../../themes/Images';
import CommonRowDisplay from './components/CommonRowDisplay';

const Profile = () => {
  return (
    <View style={styles.main}>
      <LocalImage icon={ICONS.icProfile} style={styles.icAvatar} />
      <CommonRowDisplay title="English" leftIcon={ICONS.icEarth} />
      <CommonRowDisplay title="Light-Mode" leftIcon={ICONS.icMode} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: APP_COLORS.white,
  },
  icAvatar: {
    width: 64,
    height: 64,
    margin: 20,
  },
});
