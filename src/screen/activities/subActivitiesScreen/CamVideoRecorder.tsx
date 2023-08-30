import {SCREEN_HEIGHT} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {ImageZoomer, LocalImage, Skeleton, Text} from '../../../components';
import APP_COLORS from '../../../themes/Colors';
import {ICONS} from '../../../themes/Images';
import {HAS_NOTCH, HIT_SLOP} from '../../../utils/Constant';
import {formatTimer, isEmpty} from '../../../utils/helpers';
import {VidepProps} from './types';

const CamVideoRecorder = () => {
  const navigation = useNavigation<any>();
  const {t} = useTranslation();
  const devices = useCameraDevices();
  const [isUsingCamera, setIsUsingCamera] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRecordingVideo, setIsRecordingVideo] = useState<boolean>(false);
  const [isUseBackCamera, setIsUseBackCamera] = useState<boolean>(true);
  const [image, setImage] = useState<string>('');
  const cameraRef = useRef(null);
  const {front, back} = devices;

  useEffect(() => {
    let interval: any;

    if (isRecordingVideo) {
      const currentTime = Date.now();
      interval = setInterval(() => {
        const newTime = Date.now();
        setElapsedTime(newTime - currentTime);
      }, 1000);
    } else {
      clearInterval(interval);
      setElapsedTime(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecordingVideo]);

  const onSwitchCamera = () => {
    setIsUseBackCamera(!isUseBackCamera);
  };

  const takeMedia = async () => {
    if (isUsingCamera) {
      const photo = await cameraRef.current.takePhoto({});
      setImage(photo.path);
      return;
    }

    if (isRecordingVideo) {
      stopMedia();
      return;
    }

    setIsRecordingVideo(true);
    cameraRef.current.startRecording({
      onRecordingFinished: (video: VidepProps) => console.log('video', video),
      onRecordingError: (error: any) => console.error('error', error),
    });
  };

  const stopMedia = async () => {
    if (isRecordingVideo) {
      setIsRecordingVideo(false);
      await cameraRef.current.stopRecording();
      return;
    }
    takeMedia();
  };

  const onselectMediaType = () => {
    setIsUsingCamera(!isUsingCamera);
  };

  const onBack = () => {
    navigation.goBack();
  };

  const clearImage = () => {
    setImage('');
  };

  if (back == null) {
    return <Skeleton />;
  }

  const renderCameraAndMedia = () => {
    return (
      <>
        {isEmpty(image) ? (
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={isUseBackCamera ? back : front}
            isActive={true}
            photo={isUsingCamera}
            video={!isUsingCamera}
            zoom={isUseBackCamera ? 2 : 1}
          />
        ) : (
          <ImageZoomer url={!isEmpty(image) ? `file://${image}` : null} />
        )}
        <View style={styles.timer}>
          <Text type="bold-16" color={APP_COLORS.white}>
            {formatTimer(elapsedTime)}
          </Text>
        </View>
      </>
    );
  };

  const rendeTakePhotoButtons = () => {
    return (
      <>
        <View style={[StyleSheet.absoluteFill, styles.viewCameraBtnActions]}>
          <View style={[styles.flexRow, styles.viewMediaType]}>
            <TouchableOpacity
              onPress={onselectMediaType}
              hitSlop={HIT_SLOP}
              style={styles.btnSelectMediaType}>
              <Text
                type={isUsingCamera ? 'bold-16' : 'normal-16'}
                color={APP_COLORS.white}>
                {t('common.photo')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onselectMediaType}
              hitSlop={HIT_SLOP}
              style={styles.btnSelectMediaType}>
              <Text
                type={!isUsingCamera ? 'bold-16' : 'normal-16'}
                color={APP_COLORS.white}>
                {t('common.video')}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.flexRow}>
            <TouchableOpacity onPress={takeMedia} style={styles.btnTakePhoto}>
              <TouchableOpacity style={styles.btnCircle} onPress={takeMedia}>
                {!isUsingCamera && (
                  <TouchableOpacity
                    style={[
                      styles.btnStopVideo,
                      isRecordingVideo && styles.btnRecordingVideo,
                    ]}
                    onPress={stopMedia}
                  />
                )}
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              hitSlop={HIT_SLOP}
              style={styles.btnSwitchCam}
              onPress={onSwitchCamera}>
              <LocalImage
                image={ICONS.icSwitchCamera}
                style={styles.iconSwitchCamera}
                tintColor={APP_COLORS.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  const rendeClearButton = () => {
    return (
      <>
        <TouchableOpacity
          onPress={onBack}
          style={[styles.btnClearImage, styles.btnBack]}>
          <LocalImage
            image={ICONS.icArrowLeft}
            style={styles.icX}
            tintColor={APP_COLORS.white}
          />
        </TouchableOpacity>

        {!isEmpty(image) ? (
          <TouchableOpacity onPress={clearImage} style={styles.btnClearImage}>
            <LocalImage
              image={ICONS.icX}
              style={styles.icX}
              tintColor={APP_COLORS.white}
            />
          </TouchableOpacity>
        ) : null}
      </>
    );
  };

  return (
    <>
      {renderCameraAndMedia()}
      {rendeTakePhotoButtons()}
      {rendeClearButton()}
    </>
  );
};

export default CamVideoRecorder;

const styles = StyleSheet.create({
  flexRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewCameraBtnActions: {
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.3,
    backgroundColor: `${APP_COLORS.black}20`,
  },
  viewMediaType: {
    justifyContent: 'space-evenly',
    marginVertical: 10,
    marginBottom: 20,
  },
  btnSelectMediaType: {
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: `${APP_COLORS.black}30`,
  },
  btnTakePhoto: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderColor: APP_COLORS.white,
    padding: 4,
    borderWidth: 1,
  },
  btnCircle: {
    flex: 1,
    borderRadius: 34,
    backgroundColor: APP_COLORS.white,
  },
  btnStopVideo: {
    flex: 1,
    borderRadius: 40,
    margin: 18,
    backgroundColor: APP_COLORS.red,
  },
  btnRecordingVideo: {
    borderRadius: 4,
    backgroundColor: APP_COLORS.primary,
  },
  btnSwitchCam: {
    position: 'absolute',
    width: 34,
    height: 34,
    right: 70,
  },
  iconSwitchCamera: {
    width: 34,
    height: 34,
  },
  btnClearImage: {
    position: 'absolute',
    top: HAS_NOTCH ? 50 : 30,
    right: 30,
    backgroundColor: `${APP_COLORS.black}30`,
    width: 38,
    height: 38,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBack: {
    left: 30,
  },
  icX: {
    width: 20,
    height: 20,
  },
  timer: {
    top: 50,
    padding: 4,
    borderRadius: 6,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: `${APP_COLORS.black}40`,
  },
});
