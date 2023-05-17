import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import useLocalStorage, {STORAGE_KEYS} from './src/hooks/useLocalStorage';
import RootNavigator from './src/navigation';
import {store} from './src/redux/store';

export default function App() {
  const {value: isSkip, loading} = useLocalStorage({
    key: STORAGE_KEYS.SKIP_INTRO,
  });
  if (loading) {
    return null;
  }
  return (
    <Provider store={store}>
      <RootNavigator isSkip={isSkip} />
      <StatusBar />
    </Provider>
  );
}
