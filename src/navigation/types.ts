import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//for home screen
export type HomeStackNavigatorParamList = {
  Home: undefined;
  Detail: {
    state: string;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Detail'
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Detail'
>;

//for bottomTabs
export type BottomTabNavigatorParamList = {
  HomeStack: HomeStackNavigatorParamList;
  Activities: undefined;
  Profile: undefined;
};
