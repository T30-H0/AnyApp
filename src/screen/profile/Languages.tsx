import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Text} from '../../components';
import {setLanguge} from '../../redux/appRedux';
import {AppDispatch} from '../../redux/store';

const Languages = () => {
  const {i18n} = useTranslation();
  const dispatch: AppDispatch = useDispatch();

  const onLanguaSelect = (value: string) => {
    i18n.changeLanguage(value);
    dispatch(setLanguge(value));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnAction}
        onPress={() => onLanguaSelect('en')}>
        <Text type="bold-16">English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnAction}
        onPress={() => onLanguaSelect('vi')}>
        <Text type="bold-16">Viet Nam</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Languages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnAction: {
    marginVertical: 8,
  },
});
