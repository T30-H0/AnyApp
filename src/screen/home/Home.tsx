import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from '../../components';
import APP_COLORS from '../../themes/Colors';
import {HAS_NOTCH, SCREEN_WIDTH} from '../../utils/Constant';

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Input
          placeHolder="AnyApp the world is in your pocket"
          style={styles.searchInput}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    width: '100%',
    height: '100%',
    backgroundColor: APP_COLORS.white,
  },
  header: {
    backgroundColor: APP_COLORS.primary,
    height: SCREEN_WIDTH * 0.5,
  },
  searchInput: {
    marginTop: HAS_NOTCH ? 50 : 30,
    borderRadius: 6,
    alignSelf: 'center',
  },
  inputContainerStyle: {
    marginTop: 0,
  },
});
