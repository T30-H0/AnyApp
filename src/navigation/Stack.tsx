import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';
import HeaderBackButton from '../components/HeaderBackButton';
import {useAppMode} from '../hooks/useAppMode';
import CamVideoRecorder from '../screen/activities/CamVideoRecorder';
import Post from '../screen/activities/Post';
import Login from '../screen/auth/Login';
import Detail from '../screen/home/Detail';
import Intro from '../screen/intro/Intro';
import EditProfile from '../screen/profile/EditProfile';
import Languages from '../screen/profile/Languages';
import Theme from '../screen/profile/Theme';
import {SCREEN} from './Screen';
import MainTabs from './Tabs';

// const Stack = createNativeStackNavigator<StackNavigatorParamList>();
const Stack = createNativeStackNavigator();

const renderHeader = () => {
  return <HeaderBackButton />;
};
const StackNavigator = ({isSkip}: {isSkip: boolean}) => {
  const {appModeColor, user} = useAppMode();
  const {t} = useTranslation();
  const SCREEN_OPTION: NativeStackNavigationOptions = {
    headerBackTitleVisible: false,
    orientation: 'portrait',
    headerBackButtonMenuEnabled: false,
    headerBackVisible: false,
    headerLeft: renderHeader,
    headerShadowVisible: true,
    headerTitleAlign: 'center',
    headerTintColor: appModeColor.mainColor,
    gestureEnabled: true,
    animation: Platform.select({
      android: 'fade_from_bottom',
      ios: 'default',
    }),
    headerStyle: {
      backgroundColor: appModeColor.mainBackgroundColor,
    },
    contentStyle: {
      borderTopColor: appModeColor.mainColor,
      borderTopWidth: 0.3,
    },
  };

  // const initRouteName = useMemo(() => {
  //   if (!isSkip) {
  //     return 'Intro';
  //   }
  //   if (isEmpty(user)) {
  //     return 'Login';
  //   } else {
  //     return 'Main';
  //   }
  // }, [isSkip, user]);

  type ScreenConfig = {
    name: string;
    component: React.ComponentType<any>;
    options?: object;
  };

  const SCREENS: ScreenConfig[] = [
    {
      name: SCREEN.INTRO,
      component: Intro,
      options: {headerShown: false},
    },
    {
      name: SCREEN.LOGIN,
      component: Login,
      options: {headerShown: false},
    },
    {
      name: SCREEN.MAIN,
      component: MainTabs,
      options: {headerShown: false},
    },
    {
      name: SCREEN.DETAIL,
      component: Detail,
      options: {headerShown: false},
    },
    {
      name: SCREEN.EDIT_PROFILE,
      component: EditProfile,
      options: {headerShown: false},
    },
    {
      name: SCREEN.THEME,
      component: Theme,
      options: {headerShown: true, title: 'Themes'},
    },
    {
      name: SCREEN.LANGUAGES,
      component: Languages,
      options: {headerShown: true, title: t('common.editProfile') || ''},
    },
    {
      name: SCREEN.CAM_VIDEO_RECORDER,
      component: CamVideoRecorder,
      options: {headerShown: false},
    },
    {
      name: SCREEN.POST,
      component: Post,
      options: {headerShown: true},
    },
  ];

  return (
    <Stack.Navigator initialRouteName={'Main'} screenOptions={SCREEN_OPTION}>
      {SCREENS.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
