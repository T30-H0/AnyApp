import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RESULTS} from 'react-native-permissions';
import {Button, Input, Text} from '../../components';
import useLocation from '../../hooks/useLocation';
import APP_COLORS from '../../themes/Colors';
import {HAS_NOTCH, SCREEN_WIDTH} from '../../utils/Constant';

const Home = () => {
  const {location, permissionStatus, requestLocationPermission, getLocation} =
    useLocation();

  console.log('permissionStatus', permissionStatus);
  console.log('location', location);

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Input
          placeHolder="AnyApp the world is in your pocket"
          style={styles.searchInput}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <View style={styles.body}>
        {permissionStatus === RESULTS.GRANTED && (
          <View>
            <Text>Latitude: {location?.heading}</Text>
            <Text>Longitude: {location?.longitude}</Text>
          </View>
        )}
        {permissionStatus === RESULTS.DENIED && (
          <Button
            title="Request Location Permission"
            onPress={requestLocationPermission}
          />
        )}
        <Button
          title="Get Location"
          onPress={getLocation}
          buttonStyle={styles.btnGetLocation}
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
  body: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  btnGetLocation: {
    marginVertical: 20,
  },
});
