import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useMemo} from 'react';
import {Platform} from 'react-native';
import HeaderBackButton from '../components/HeaderBackButton';
import Login from '../screen/auth/Login';
import Detail from '../screen/home/Detail';
import Intro from '../screen/intro/Intro';
import Languages from '../screen/profile/Languages';
import Theme from '../screen/profile/Theme';
import MainTabs from './Tabs';

// const Stack = createNativeStackNavigator<StackNavigatorParamList>();
const Stack = createNativeStackNavigator();

const SCREEN_OPTION: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  orientation: 'portrait',
  headerBackButtonMenuEnabled: false,
  headerBackVisible: false,
  headerLeft: () => <HeaderBackButton />,
  headerShadowVisible: true,
  headerTitleAlign: 'center',
  gestureEnabled: true,
  animation: Platform.select({
    android: 'fade_from_bottom',
    ios: 'default',
  }),
};

const StackNavigator = ({isSkip}: {isSkip: boolean}) => {
  const initRouteName = useMemo(() => {
    return isSkip ? 'Main' : 'Intro';
  }, [isSkip]);

  return (
    <Stack.Navigator
      initialRouteName={initRouteName}
      screenOptions={SCREEN_OPTION}>
      {/* auth */}
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
        options={{headerShown: true, title: 'Theme'}}
        name="Theme"
        component={Theme}
      />
      <Stack.Screen
        options={{headerShown: true, title: 'Languages'}}
        name="Languages"
        component={Languages}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
