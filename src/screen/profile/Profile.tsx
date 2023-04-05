import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LocalImage} from '../../components';
import APP_COLORS from '../../themes/Colors';
import {ICONS} from '../../themes/Images';

const Profile = () => {
  return (
    <View style={styles.main}>
      <LocalImage icon={ICONS.icProfile} style={styles.icAvatar} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: APP_COLORS.white,
  },
  icAvatar: {
    width: 64,
    height: 64,
    margin: 20,
  },
});
