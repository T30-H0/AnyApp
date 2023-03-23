import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Activities from '../screen/activities/Activities';
import Profile from '../screen/profile/Profile';
import HomeStackNavigator from './HomeStack';
import {BottomTabNavigatorParamList} from './types';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Activities" component={Activities} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
