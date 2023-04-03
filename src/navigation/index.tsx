import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import StackNavigator from './Stack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
