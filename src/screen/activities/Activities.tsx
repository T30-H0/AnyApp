import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Activities = () => {
  return (
    <View style={styles.container}>
      <Text>Activities</Text>
    </View>
  );
};

export default Activities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
