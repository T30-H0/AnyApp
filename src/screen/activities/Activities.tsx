import {SCREEN_WIDTH} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Divider,
  IconText,
  LocalImage,
  RemoteImage,
  Text,
} from '../../components';
import CustomTab from '../../components/CustomTab';
import ModeView from '../../components/ModeView';
import {SCREEN} from '../../navigation/Screen';
import APP_COLORS from '../../themes/Colors';
import {ICONS, IMAGES} from '../../themes/Images';
import {HIT_SLOP} from '../../utils/Constant';
import {formatThousandsNumber} from '../../utils/helpers';
import News from './News';

const Activities = () => {
  const navigation = useNavigation<any>();
  const [isLoved, setIsLoved] = useState(false);
  const animatedHeartValue = useRef(new Animated.Value(0)).current;
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    Animated.timing(animatedHeartValue, {
      toValue: isLoved ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isLoved, animatedHeartValue]);

  const heartAnimatedStyle = {
    transform: [
      {
        scale: animatedHeartValue.interpolate({
          inputRange: [0, 0.1, 0.8, 1],
          outputRange: [1, 1.4, 2, 1],
        }),
      },
    ],
  };

  const onAddPost = () => {
    navigation.navigate(SCREEN.POST);
  };

  const onHeart = () => {
    setIsLoved(!isLoved);
  };

  const renderItem = () => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postInfoContainer}>
          <LocalImage image={IMAGES.imgDefaultAvatar} style={styles.avatar} />
          <View style={styles.basicPostInfo}>
            <Text type="bold-14">Jessica Jr Celleon</Text>
            <Text>2h</Text>
          </View>
        </View>
        <View style={styles.postContent}>
          <Text style={styles.txtContent}>
            Embracing the heights and conquering the challenges, my mountain
            getaway was a true escape into natures embrace.
          </Text>
          <Text type="bold-12">#MountainAdventures</Text>
        </View>
        <RemoteImage
          url={
            'https://images.immediate.co.uk/production/volatile/sites/3/2020/12/Gal-Gadot-Wonder-Woman-1984-b8f82eb.jpg'
          }
          style={styles.image}
          // resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.viewBtnActions}>
          <Text type="normal-12">{formatThousandsNumber(23811)} Likes</Text>
          <Text type="normal-12"> {formatThousandsNumber(12301)} Loves</Text>
          <Text type="normal-12">{formatThousandsNumber(27897)} Comments</Text>
        </View>

        <Divider style={styles.divider} />
        <View style={styles.viewBtnActions}>
          <TouchableOpacity hitSlop={HIT_SLOP}>
            <IconText
              icon={ICONS.icLikeFill}
              text="Like"
              iconStyle={styles.iconAction}
            />
          </TouchableOpacity>
          <TouchableOpacity
            hitSlop={HIT_SLOP}
            onPress={onHeart}
            activeOpacity={0.7}>
            <IconText
              icon={isLoved ? ICONS.icHeartFill : ICONS.icHeartOutLine}
              text="Love"
              iconStyle={[
                styles.iconAction,
                {tintColor: isLoved ? APP_COLORS.pink : undefined},
                heartAnimatedStyle,
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity hitSlop={HIT_SLOP}>
            <IconText
              icon={ICONS.icComment}
              text="Comments"
              iconStyle={styles.iconAction}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ModeView style={styles.fill}>
      <CustomTab setTabIndex={setTabIndex} />
      {tabIndex === 0 ? (
        <FlatList
          data={['']}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_item, index: number) => String(index)}
          style={styles.fill}
          contentContainerStyle={styles.contentContainerStyle}
        />
      ) : (
        <News />
      )}

      <TouchableOpacity style={styles.btnPlus} onPress={onAddPost}>
        <LocalImage
          image={ICONS.icPlus}
          style={styles.icPlus}
          tintColor={APP_COLORS.primary}
        />
      </TouchableOpacity>
    </ModeView>
  );
};

export default Activities;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: 14,
    backgroundColor: `${APP_COLORS.mainGrey}60`,
  },
  btnPlus: {
    top: 14,
    right: 30,
    position: 'absolute',
  },
  icPlus: {
    width: 24,
    height: 24,
  },
  postContainer: {
    paddingVertical: 12,
    marginVertical: 6,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: APP_COLORS.borderColor,
    backgroundColor: APP_COLORS.white,
  },
  postInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  basicPostInfo: {
    marginLeft: 12,
  },
  postContent: {
    marginTop: 12,
    paddingHorizontal: 12,
  },
  txtContent: {
    lineHeight: 20,
    marginBottom: 8,
  },
  image: {
    marginTop: 12,
    width: SCREEN_WIDTH,
    height: 200,
  },
  viewBtnActions: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconAction: {
    width: 20,
    height: 20,
  },
  divider: {
    marginTop: 4,
  },
});
