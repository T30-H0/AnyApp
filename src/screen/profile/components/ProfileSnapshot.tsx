import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconText, LocalImage, Text} from '../../../components';
import APP_COLORS from '../../../themes/Colors';
import {ICONS, IMAGES} from '../../../themes/Images';
import {displayPhoneNumber} from '../../../utils/helpers';
import {IProfileSnapshot} from './types';

const ProfileSnapshot = (props: IProfileSnapshot) => {
  const {navigate} = useNavigation<any>();
  const {} = props;
  const onEditProfile = () => {
    navigate('EditProfile', {});
  };

  return (
    <View style={styles.container}>
      <LocalImage image={IMAGES.imgDefaultAvatar} style={styles.icAvatar} />
      <Text type="bold-16" numberOfLines={2} style={styles.txtName}>
        Michael Code
      </Text>
      <IconText
        icon={ICONS.icEmail}
        text="michaelcode@gmail.com"
        style={styles.marBottom12}
      />
      <IconText
        icon={ICONS.icLocation}
        text="345 St Stock Homeless"
        style={styles.marBottom12}
      />
      <IconText
        icon={ICONS.icPhone}
        text={displayPhoneNumber('0987654321')}
        style={styles.marBottom12}
      />
      <IconText
        icon={ICONS.icCalendar}
        text="07 Sep 2004"
        style={styles.marBottom12}
      />

      <TouchableOpacity style={styles.btnEdit} onPress={onEditProfile}>
        <LocalImage image={ICONS.icEdit} tintColor={APP_COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileSnapshot;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 12,
    paddingBottom: 0,
    borderWidth: 1,
    borderColor: APP_COLORS.borderColor,
    borderRadius: 12,
    marginHorizontal: 50,
  },
  icAvatar: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    position: 'absolute',
    top: -40,
  },
  txtName: {
    marginTop: 40,
    marginBottom: 12,
    alignSelf: 'center',
  },
  marBottom12: {
    marginBottom: 12,
  },
  btnEdit: {
    padding: 8,
    borderWidth: 1,
    borderColor: APP_COLORS.primary,
    borderRadius: 40,
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
