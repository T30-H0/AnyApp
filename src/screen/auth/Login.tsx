import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {useDispatch} from 'react-redux';
import {Button, Divider, Input, LocalImage, Text} from '../../components';
import {SCREEN} from '../../navigation/Screen';
import {setUser} from '../../redux/appRedux';
import {AppDispatch} from '../../redux/store';
import APP_COLORS from '../../themes/Colors';
import {IMAGES} from '../../themes/Images';

const Login = () => {
  const navigation = useNavigation<any>();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.WEB_CLIENT_ID,
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        dispatch(setUser(userInfo));
        navigation.navigate(SCREEN.MAIN);
      }
    } catch (error: any) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          break;
        case statusCodes.IN_PROGRESS:
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          break;
        default:
          break;
      }
    }
  };

  const signInWithFaceBook = async () => {
    try {
      LoginManager.logOut();

      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result) {
        if (result.isCancelled) {
        } else {
          const tokenResponse = await AccessToken.getCurrentAccessToken();
          if (tokenResponse) {
            navigation.navigate(SCREEN.MAIN);
          }
        }
      }
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <LocalImage image={IMAGES.imgMainLogo} style={styles.mainLogo} />
      <Input label="Email" placeHolder="Enter your email" />
      <Input
        label="Password"
        style={styles.pass}
        placeHolder="Enter your password"
      />
      <View style={styles.loginSocial}>
        <Divider />
        <Text type="-16" color={APP_COLORS.mainGrey} style={styles.txtOr}>
          Or
        </Text>
        <Divider />
      </View>
      <Button
        fill={false}
        title="Sign in with Google"
        titleColor={APP_COLORS.black}
        onPress={signIn}
        buttonStyle={styles.btn}
        icon={IMAGES.imgGoogleLogo}
      />

      <Button
        fill={false}
        title=" Sign in with FaceBook"
        titleColor={APP_COLORS.black}
        onPress={signInWithFaceBook}
        buttonStyle={styles.btn}
        icon={IMAGES.imgFaceBookLogo}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${APP_COLORS.primary}5`,
  },
  pass: {
    marginTop: 12,
  },
  btn: {
    marginTop: 20,
  },
  loginSocial: {
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtOr: {
    marginHorizontal: 20,
  },
  mainLogo: {width: 50, height: 50},
});
