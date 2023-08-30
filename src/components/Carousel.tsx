import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {NEAR_BY} from '../data';
import {SCREEN} from '../navigation/Screen';
import APP_COLORS from '../themes/Colors';
import {ICONS} from '../themes/Images';
import {SCREEN_WIDTH} from '../utils/Constant';
import {formatCurrency} from '../utils/helpers';
import CarouselHeader from './CarouselHeader';
import LocalImage from './LocalImage';
import Text from './Text';

const CARD_LENGTH = SCREEN_WIDTH - 60;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const Item = ({
  item,
  index,
  scrollX,
  onPressItem,
}: {
  item: any;
  index: any;
  scrollX: any;
  onPressItem: () => void;
}) => {
  const size = useSharedValue(0.8);
  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  size.value = interpolate(
    scrollX,
    inputRange,
    [0.92, 1, 0.92],
    Extrapolate.CLAMP,
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{scaleY: size.value}],
    };
  });
  return (
    <Animated.View key={String(index)} style={[styles.card, cardStyle]}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPressItem}>
        <FastImage source={{uri: item?.image}} style={styles.image} />
        <View style={styles.content}>
          <Text
            type="bold-16"
            numberOfLines={2}
            color={APP_COLORS.primary}
            style={styles.txtHouseName}>
            An Khe - Thanh Khe - Da Nang
          </Text>

          <View style={styles.row}>
            <LocalImage
              tintColor={APP_COLORS.primary}
              image={ICONS.icLocation}
            />
            <Text style={styles.txtGeneral} type="normal-14" numberOfLines={1}>
              255 Dien Bien Phu - Hoa Khe - Thanh Khe - Da Nang
            </Text>
          </View>

          <View style={[styles.row, styles.mVer4]}>
            <View style={styles.row}>
              <LocalImage
                tintColor={APP_COLORS.primary}
                image={ICONS.icDateTime}
              />
              <Text style={styles.txtGeneral} type="normal-14">
                24/04/2023
              </Text>
            </View>
            <View style={styles.row}>
              <LocalImage tintColor={APP_COLORS.primary} image={ICONS.icArea} />
              <Text style={styles.txtGeneral} type="normal-14">
                25
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.row}>
              <LocalImage
                tintColor={APP_COLORS.primary}
                image={ICONS.icStatus}
              />
              <Text style={styles.txtGeneral} type="normal-14">
                Opening
              </Text>
            </View>
            <View style={styles.row}>
              <LocalImage
                tintColor={APP_COLORS.primary}
                image={ICONS.icMaleAndFemale}
              />
              <Text style={styles.txtGeneral} type="normal-14">
                Yes
              </Text>
            </View>
          </View>

          <View style={[styles.row, styles.price]}>
            <LocalImage
              tintColor={APP_COLORS.primary}
              image={ICONS.icCurrency}
            />
            <Text
              style={styles.txtGeneral}
              type="bold-14"
              color={APP_COLORS.primary}>
              {formatCurrency(2000000)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Carousel = () => {
  const navigation = useNavigation<any>();
  const {t} = useTranslation();

  const [scrollX, setScrollX] = useState(0);

  const onPressItem = () => {
    navigation.navigate(SCREEN.DETAIL);
  };

  return (
    <Animated.View>
      <CarouselHeader
        title={t('common.newEst')}
        subTitle="Find your favourite house"
        onPress={() => {}}
      />
      <AnimatedFlatList
        data={NEAR_BY}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}: {item: any; index: any}) => {
          return (
            <View>
              <Item
                item={item}
                index={index}
                scrollX={scrollX}
                onPressItem={onPressItem}
              />
            </View>
          );
        }}
        keyExtractor={(item: any) => item.id}
        onScroll={(event: any) => {
          setScrollX(event?.nativeEvent?.contentOffset.x);
        }}
        decelerationRate={1}
        snapToAlignment={'center'}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToInterval={CARD_LENGTH + 16}
      />
    </Animated.View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    width: CARD_LENGTH,
    height: SCREEN_WIDTH * 0.3,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  card: {
    borderRadius: 10,
    marginHorizontal: 8,
    marginBottom: 1,
    width: CARD_LENGTH,
    backgroundColor: APP_COLORS.white,
    shadowColor: APP_COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  content: {
    padding: 12,
  },
  txtHouseName: {
    lineHeight: 24,
    marginBottom: 4,
  },
  row: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  txtGeneral: {
    lineHeight: 24,
    marginHorizontal: 10,
  },
  mVer4: {
    marginVertical: 4,
  },
  price: {
    justifyContent: 'flex-end',
  },
});
