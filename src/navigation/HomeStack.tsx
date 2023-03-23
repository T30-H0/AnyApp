import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Detail from '../screen/home/Detail';
import Home from '../screen/home/Home';
import {HomeStackNavigatorParamList} from './types';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{headerShown: true}}
        name="Detail"
        component={Detail}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
