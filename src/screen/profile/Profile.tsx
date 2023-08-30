import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '../../components';
import ModeView from '../../components/ModeView';
import {useAppMode} from '../../hooks/useAppMode';
import {SCREEN} from '../../navigation/Screen';
import {RootState} from '../../redux/store';
import APP_COLORS from '../../themes/Colors';
import {ICONS} from '../../themes/Images';
import {isEmpty} from '../../utils/helpers';
import ProfileSnapshot from './components/ProfileSnapshot';
import RowSection from './components/RowSection';

const Profile = () => {
  const navigation = useNavigation<any>();
  const {t} = useTranslation();
  const {isLightMode} = useAppMode();

  // const dispatch: AppDispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.app.user);

  const onLanguage = () => {
    navigation.navigate(SCREEN.LANGUAGES, {});
  };
  const onTheme = () => {
    navigation.navigate(SCREEN.THEME, {});
  };
  const onLogout = async () => {
    // await dispatch(logout);
  };

  return (
    <ModeView style={styles.main}>
      <ProfileSnapshot />
      <View style={styles.content}>
        <RowSection
          onPress={onLanguage}
          title={t('common.english')}
          leftIcon={ICONS.icEarth}
        />
        <RowSection
          onPress={onTheme}
          title={t('common.theme')}
          leftIcon={isLightMode ? ICONS.icSun : ICONS.icMoon}
        />
      </View>

      <Button
        fill={false}
        title={isEmpty(user) ? t('common.login') : t('common.logout')}
        titleColor={APP_COLORS.primary}
        leftIcon={ICONS.icLogout}
        onPress={onLogout}
        buttonStyle={styles.btnLogout}
      />
    </ModeView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 24,
  },
  main: {
    flex: 1,
    backgroundColor: APP_COLORS.white,
  },
  btnLogout: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});
