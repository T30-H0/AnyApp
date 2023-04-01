import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import MainTabs from './Tabs';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};

export default RootNavigator;
