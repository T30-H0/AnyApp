import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//for home screen
export type StackNavigatorParamList = {
  Main: undefined;
  Detail: {
    state: string;
  };
  Intro: undefined;
  Login: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackNavigatorParamList,
  'Detail'
>;

export type DetailsScreenRouteProp = RouteProp<
  StackNavigatorParamList,
  'Detail'
>;

//for bottomTabs
export type BottomTabNavigatorParamList = {
  Home: StackNavigatorParamList;
  Activities: undefined;
  Profile: undefined;
  Main: undefined;
};

export type LoginScreenRouteProp = RouteProp<StackNavigatorParamList, 'Main'>;
