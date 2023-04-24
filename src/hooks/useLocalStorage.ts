import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useMemo, useState} from 'react';

const storeData = async (key: string, value: any) => {
  console.log('vao storage', value);
  try {
    const storedValue =
      typeof value !== 'string' && typeof value !== 'number'
        ? JSON.stringify(value)
        : value.toString();
    await AsyncStorage.setItem(key, storedValue);
  } catch (e) {}
};

const getData = async (key: string) => {
  console.log('vao get');
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value ?? 'null');
  } catch (e) {
    return null;
  }
};

const removeData = async (key?: string) => {
  console.log('vao clear');
  try {
    if (!key) {
      return;
    }
    // await AsyncStorage.removeItem(key);
  } catch (e) {}
};

const useLocalStorage = ({key}: {key: string}) => {
  const [value, setValue] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const memoizedStoreData = useMemo(
    () => (newValue: any) => storeData(key, newValue),
    [key],
  );

  const memoizedRemoveData = useMemo(
    () => async () => {
      await removeData(key);
    },
    [key],
  );

  useEffect(() => {
    const getCurrentValue = async () => {
      setLoading(true);
      const currentValue = await getData(key);
      setValue(currentValue);
      setLoading(false);
    };

    getCurrentValue();
  }, [key]);

  return {
    value,
    loading,
    setData: memoizedStoreData,
    remove: memoizedRemoveData,
  };
};

export default useLocalStorage;

export const STORAGE_KEYS = Object.freeze({
  SKIP_INTRO: 'skipIntro',
});
