import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';
import {Button, Divider, Input, Text} from '../../components';
import APP_COLORS from '../../themes/Colors';
import {IMAGES} from '../../themes/Images';

const Login = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        navigation.navigate('Main');
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
            navigation.navigate('Main');
          }
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <Input error="Invalid email" />
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
});
