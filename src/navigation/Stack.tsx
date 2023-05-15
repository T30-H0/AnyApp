import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import Login from '../screen/auth/Login';
import Detail from '../screen/home/Detail';
import Intro from '../screen/intro/Intro';
import MainTabs from './Tabs';

// const Stack = createNativeStackNavigator<StackNavigatorParamList>();
const Stack = createNativeStackNavigator();

const StackNavigator = ({isSkip}: {isSkip: boolean}) => {
  const initRouteName = useMemo(() => {
    return isSkip ? 'Main' : 'Intro';
  }, [isSkip]);

  return (
    <Stack.Navigator initialRouteName={initRouteName}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Main"
        component={MainTabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
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
