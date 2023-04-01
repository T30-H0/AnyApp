import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import Activities from '../screen/activities/Activities';
import Profile from '../screen/profile/Profile';
import APP_COLORS from '../themes/Colors';
import ICONS from '../themes/Images';
import StackNavigator from './Stack';

// const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const getTabBarIcon = (focused: boolean, icon: ImageSourcePropType) => {
    return (
      <Image
        source={icon}
        style={[styles.image, focused ? styles.active : styles.inActive]}
      />
    );
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => getTabBarIcon(focused, ICONS.icHome),
        }}
      />
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, ICONS.icRecent),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => getTabBarIcon(focused, ICONS.icProfile),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
  active: {
    tintColor: APP_COLORS.primary,
  },
  inActive: {
    tintColor: APP_COLORS.mainGrey,
  },
});
