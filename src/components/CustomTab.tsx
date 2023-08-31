import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import APP_COLORS from '../themes/Colors';
import {ICONS} from '../themes/Images';
import {HIT_SLOP} from '../utils/Constant';
import {LocalImage} from './';
import {CustomTabProps} from './types';

const TAB_DATA: CustomTabProps[] = [
  {
    index: 0,
    values: 'your_activity',
    name: 'Your Activity',
    icon: ICONS.icMain,
    activeColor: APP_COLORS.primary,
    inActiveColor: APP_COLORS.black,
  },
  {
    index: 1,
    values: 'news',
    name: 'News',
    icon: ICONS.icNewsOutLine,
    activeColor: APP_COLORS.primary,
    inActiveColor: APP_COLORS.black,
  },
];

const CustomTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelectTab = (index: number) => () => {
    setSelectedIndex(index);
  };

  const renderItem = ({item, index}) => {
    const isSelected = item?.index === selectedIndex;
    return (
      <TouchableOpacity
        key={index}
        hitSlop={HIT_SLOP}
        onPress={onSelectTab(index)}
        style={styles.itemContainer}>
        <LocalImage
          image={item.icon}
          style={isSelected ? styles.activeIcon : styles.icon}
          tintColor={isSelected ? item.activeColor : item.inActiveColor}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <FlatList
        horizontal
        data={TAB_DATA}
        scrollEnabled={false}
        renderItem={renderItem}
        style={styles.flatListStyle}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(_item, index) => String(index)}
      />
    </>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  flatListStyle: {
    flexGrow: 0,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 10,
  },
  itemContainer: {
    paddingVertical: 12,
    marginHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  activeIcon: {
    width: 34,
    height: 34,
  },
});
