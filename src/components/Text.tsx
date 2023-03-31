import React from 'react';
import {Text as RNText} from 'react-native';
import {ITextProps} from './types';

const styleByType: any = (fontType: string) => {
  const FONT_TYPE = fontType.split('-');

  return {
    fontWeight: FONT_TYPE[0] || 'normal',
    fontSize: Number(FONT_TYPE[1]) || 14,
  };
};

const Text = (textProps: ITextProps) => {
  const {style, type, children, props} = textProps;
  return (
    <RNText {...props} style={[style, styleByType(type)]}>
      {children}
    </RNText>
  );
};

export default Text;
