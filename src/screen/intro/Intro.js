import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from '../../components';
import LocaLImage from '../../components/LocalImage';
import {INTRO_DATA} from '../../data';
import APP_COLORS from '../../themes/Colors';
import {HIT_SLOP, SCREEN_WIDTH} from '../../utils/Constant';

const Intro = () => {
  const navigation = useNavigation();
  const [slideNum, setSlideNum] = useState(0);

  const onScrollEnd = e => {
    const {x} = e.nativeEvent.contentOffset;
    const {width} = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(x / width);
    setSlideNum(pageNum);
  };

  const onContinue = () => {
    navigation.navigate('Main');
  };

  const renderFooter = () => {
    if (slideNum === 2) {
      return (
        <View>
          <TouchableOpacity
            hitSlop={HIT_SLOP}
            style={styles.btnSkip}
            onPress={onContinue}>
            <Text type={'bold-16'} color={APP_COLORS.primary}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}>
        {INTRO_DATA.map((item, index) => {
          return (
            <View style={styles.body} key={String(index)}>
              <LocaLImage icon={item.image} style={styles.image} />
              <Text
                type="normal-16"
                textAlign="center"
                color={APP_COLORS.primary}
                style={styles.txtDes}>
                {item.description}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.footer}>
        {slideNum !== 2 && (
          <View style={styles.pagination}>
            {INTRO_DATA.map((_, index) => {
              const slideWidth = slideNum === index ? 25 : 6;
              return (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      width: slideWidth,
                      backgroundColor:
                        slideNum === index
                          ? APP_COLORS.primary
                          : APP_COLORS.mainGrey,
                    },
                  ]}
                />
              );
            })}
          </View>
        )}
        {renderFooter()}
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: `${APP_COLORS.primary}3`,
  },
  body: {
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  },
  txtDes: {marginTop: 40, marginHorizontal: 20},
  footer: {
    width: SCREEN_WIDTH,
    paddingBottom: 40,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    height: 6,
    marginHorizontal: 8,
    borderRadius: 5,
    backgroundColor: APP_COLORS.primary,
  },
  btnSkip: {
    borderBottomWidth: 1,
    alignSelf: 'center',
    borderColor: APP_COLORS.primary,
  },
});
