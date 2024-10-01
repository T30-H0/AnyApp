import React, {useRef} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import APP_COLORS from '../../themes/Colors';
import {ICONS, IMAGES} from '../../themes/Images';
import {SCREEN_HEIGHT} from '../../utils/Constant';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);
const Detail = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');
  const searchAnimatedStyle = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const featureAnimatedStyle = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };

  const featureImageAnimatedStyle = {
    width: animatedValue.interpolate({
      inputRange: [0, 80],
      outputRange: [32, 16],
      extrapolate: 'clamp',
    }),
    height: animatedValue.interpolate({
      inputRange: [0, 80],
      outputRange: [32, 16],
      extrapolate: 'clamp',
    }),
  };

  const depositeViewstyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 36],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -54],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const withDrawViewstyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -16],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -54],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const QRCodeViewstyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -56],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -54],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scanCodeViewstyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -92],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -54],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.upperHeaderPlacholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <View style={styles.upperHeader}>
          <View style={styles.searchContainer}>
            <Image source={ICONS.icSearch} style={styles.iconSearch} />
            <AnimatedInput
              placeholder="Enter search"
              placeholderTextColor={`${APP_COLORS.white}90`}
              style={[styles.searchInput, searchAnimatedStyle]}
            />
          </View>
          <Image source={ICONS.icTick} style={styles.iconTick} />
          <Image source={ICONS.icProfile} style={styles.iconProfile} />
        </View>

        <View style={styles.lowerHeader}>
          <Animated.View style={[styles.feature, depositeViewstyle]}>
            <Animated.Image
              source={IMAGES.imgDeposit}
              style={[styles.imgFeature, featureImageAnimatedStyle]}
            />
            <Animated.Text style={[styles.featureName, featureAnimatedStyle]}>
              Nạp tiền
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, withDrawViewstyle]}>
            <Animated.Image
              source={IMAGES.imgWithDrawMoney}
              style={[styles.imgFeature, featureImageAnimatedStyle]}
            />
            <Animated.Text style={[styles.featureName, featureAnimatedStyle]}>
              Rút tiền
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, QRCodeViewstyle]}>
            <Animated.Image
              source={IMAGES.imgQRCode}
              style={[styles.imgFeature, featureImageAnimatedStyle]}
            />
            <Animated.Text style={[styles.featureName, featureAnimatedStyle]}>
              Mã QR
            </Animated.Text>
          </Animated.View>
          <Animated.View style={[styles.feature, scanCodeViewstyle]}>
            <Animated.Image
              source={IMAGES.imgCodeScan}
              style={[styles.imgFeature, featureImageAnimatedStyle]}
            />
            <Animated.Text style={[styles.featureName, featureAnimatedStyle]}>
              Mã vạch
            </Animated.Text>
          </Animated.View>
        </View>
      </SafeAreaView>

      <ScrollView
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={() => {
          scrollViewRef.current.scrollTo({
            y: scrollDirection.current === 'down' ? 100 : 0,
            animated: true,
          });
        }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <View style={styles.paddinHeader}></View>
        <View style={styles.scrollViewContainer}></View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const UPPER_HEADER_HEIGHT = 40;
const LOWPER_HEADER_HEIGHT = 96;
const styles = StyleSheet.create({
  container: {flex: 1},

  header: {
    width: '100%',
    position: 'absolute',
    backgroundColor: APP_COLORS.pink,
  },
  upperHeaderPlacholder: {
    height: UPPER_HEADER_HEIGHT,
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  iconSearch: {
    width: 16,
    height: 16,
    marginLeft: 8,
    tintColor: APP_COLORS.white,
  },
  iconTick: {
    width: 16,
    height: 16,
    marginHorizontal: 32,
    tintColor: APP_COLORS.white,
  },
  iconProfile: {
    width: 16,
    height: 16,
    tintColor: APP_COLORS.white,
  },
  searchInput: {
    width: '100%',
    borderRadius: 4,
    position: 'absolute',
    paddingLeft: 32,
    paddingVertical: 4,
    color: APP_COLORS.white,
    backgroundColor: `${APP_COLORS.white}30`,
  },

  lowerHeader: {
    height: LOWPER_HEADER_HEIGHT,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  feature: {
    alignItems: 'center',
  },
  imgFeature: {
    width: 32,
    height: 32,
    tintColor: APP_COLORS.white,
  },
  featureName: {
    fontSize: 12,
    lineHeight: 14,
    marginTop: 12,
    fontWeight: 'bold',
    color: APP_COLORS.white,
  },
  paddinHeader: {
    height: LOWPER_HEADER_HEIGHT,
  },
  scrollViewContainer: {
    height: SCREEN_HEIGHT * 2,
    backgroundColor: APP_COLORS.white,
  },
});
