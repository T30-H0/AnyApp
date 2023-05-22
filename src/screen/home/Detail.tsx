// import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import CommonHeader from '../../components/CommonHeader';
// import {DetailsScreenRouteProp} from '../../navigation/types';
import ModeView from '../../components/ModeView';
import APP_COLORS from '../../themes/Colors';
import {IMAGES} from '../../themes/Images';
import {SCREEN_WIDTH} from '../../utils/Constant';

const Detail = () => {
  // const route = useRoute<DetailsScreenRouteProp>();
  // const {state} = route?.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <ModeView style={styles.body}>
        <ImageBackground
          source={IMAGES.imgDefaultImage}
          style={styles.headerImage}
          imageStyle={styles.imageStyle}
          resizeMode="contain">
          <CommonHeader />
        </ImageBackground>
      </ModeView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {flex: 1},
  body: {flex: 1},

  headerImage: {
    width: SCREEN_WIDTH,
    aspectRatio: 16 / 9,
  },
  imageStyle: {
    tintColor: APP_COLORS.mainGrey,
    backgroundColor: `${APP_COLORS.primary}20`,
  },
});
