import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState({
    portrait: true,
    landscape: false,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  });

  const handleOrientationChange = () => {
    const {width, height} = Dimensions.get('window');
    const isPortrait = height > width;

    setOrientation({
      portrait: isPortrait,
      landscape: !isPortrait,
      width,
      height,
    });
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      handleOrientationChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return orientation;
};

export default useDeviceOrientation;
