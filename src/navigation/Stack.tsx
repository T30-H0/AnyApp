import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Login from '../screen/auth/Login';
import Detail from '../screen/home/Detail';
import Intro from '../screen/intro/Intro';
import MainTabs from './Tabs';
import {StackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<StackNavigatorParamList>();
// const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainTabs}
      />
      <Stack.Screen
        options={{headerShown: true}}
        name="Detail"
        component={Detail}
      />
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
