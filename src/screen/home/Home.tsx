import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {HomeScreenNavigationProp} from '../../navigation/types';

const Home = () => {
  // const navigation = useNavigation<HomeScreenNavigationProp>();
  // const [state] = useState('State');
  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
