import {SCREEN_HEIGHT} from '@gorhom/bottom-sheet';
import {ImageZoom} from '@likashefqet/react-native-image-zoom';
import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SCREEN_WIDTH} from '../utils/Constant';
import {isEmpty} from '../utils/helpers';

const ImageZoomer = ({url}: {url: string}) => {
  if (isEmpty(url)) {
    return null;
  }
  return (
    <GestureHandlerRootView style={styles.fill}>
      <ImageZoom
        uri={url}
        style={styles.image}
        minScale={0.5}
        maxScale={3}
        // onInteractionStart={() => console.log('Interaction started')}
        // onInteractionEnd={() => console.log('Interaction ended')}
        // onPinchStart={() => console.log('Pinch gesture started')}
        // onPinchEnd={() => console.log('Pinch gesture ended')}
        // onPanStart={() => console.log('Pan gesture started')}
        // onPanEnd={() => console.log('Pan gesture ended')}
        resizeMode="contain"
      />
    </GestureHandlerRootView>
  );
};

export default ImageZoomer;

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
