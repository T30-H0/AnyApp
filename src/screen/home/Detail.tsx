import {useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DetailsScreenRouteProp} from '../../navigation/types';

const Detail = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {state} = route?.params || {};

  return (
    <View style={styles.container}>
      <Text>
        This <Text style={styles.text}>{state}</Text> from Home
      </Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#D3e',
  },
});
