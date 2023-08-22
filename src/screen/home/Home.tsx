import React, {useEffect, useState} from 'react';
import {Linking, ScrollView, StyleSheet, View} from 'react-native';
import {Input} from '../../components';
import Carousel from '../../components/Carousel';
import APP_COLORS from '../../themes/Colors';
import {HAS_NOTCH, SCREEN_WIDTH} from '../../utils/Constant';

const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const getUrlAsync = async () => {
      const initialUrl = await Linking.getInitialURL();

      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return {url, processing};
};

const Home = () => {
  const {url: initialUrl, processing} = useInitialURL();
  console.log('init', initialUrl);
  console.log('processing', processing);
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Input
          placeHolder="AnyApp the world is in your pocket"
          style={styles.searchInput}
          inputContainerStyle={styles.inputContainerStyle}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
      </ScrollView>
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
    paddingTop: 20,
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
