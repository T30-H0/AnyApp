import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {LocalImage} from '../../components';
import ModeView from '../../components/ModeView';
import APP_COLORS from '../../themes/Colors';
import {ICONS} from '../../themes/Images';
import RowSection from './components/RowSection';

const Profile = () => {
  const navigation = useNavigation<any>();

  const onLanguage = () => {
    navigation.navigate('Languages', {});
  };
  const onTheme = () => {
    navigation.navigate('Theme', {});
  };
  return (
    <ModeView style={styles.main}>
      <LocalImage icon={ICONS.icProfile} style={styles.icAvatar} />
      <RowSection
        onPress={onLanguage}
        title="English"
        leftIcon={ICONS.icEarth}
      />
      <RowSection
        onPress={onTheme}
        title="Light-Mode"
        leftIcon={ICONS.icMode}
      />
    </ModeView>
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
