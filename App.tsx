import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar />
    </>
  );
}
