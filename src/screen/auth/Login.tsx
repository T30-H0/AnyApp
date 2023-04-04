import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../components';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import Input from '../../components/Input';
import APP_COLORS from '../../themes/Colors';
import {IMAGES} from '../../themes/Images';

const Login = () => {
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
        onPress={() => {}}
        buttonStyle={styles.btn}
        icon={IMAGES.imgGoogleLogo}
      />

      <Button
        fill={false}
        title=" Sign in with FaceBook"
        titleColor={APP_COLORS.black}
        onPress={() => {}}
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
