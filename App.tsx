import React from 'react';
import {StatusBar} from 'react-native';
import useLocalStorage, {STORAGE_KEYS} from './src/hooks/useLocalStorage';
import RootNavigator from './src/navigation';

export default function App() {
  const {value: isSkip, loading} = useLocalStorage({
    key: STORAGE_KEYS.SKIP_INTRO,
  });
  if (loading) {
    return null;
  }
  return (
    <>
      <RootNavigator isSkip={isSkip} />
      <StatusBar />
    </>
  );
}
