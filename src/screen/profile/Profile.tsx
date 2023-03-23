import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.main}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
