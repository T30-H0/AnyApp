import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import StackNavigator from './Stack';

const RootNavigator = ({isSkip}: {isSkip: boolean}) => {
  return (
    <NavigationContainer>
      <StackNavigator isSkip={isSkip} />
    </NavigationContainer>
  );
};

export default RootNavigator;
