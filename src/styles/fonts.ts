import {StyleSheet} from 'react-native';

export enum FontFamily {
  PRIMARY = 'Montserrat-Regular',
  PRIMARY_BOLD = 'Montserrat-Bold',
  MONOSPACED = 'FiraMono-Regular',
  PARAGRAPH = 'Lato-Regular',
}

export default StyleSheet.create({
  h1: {
    fontFamily: FontFamily.PRIMARY_BOLD,
    fontSize: 20,
  },
  primary: {
    fontFamily: FontFamily.PRIMARY,
  },
  monospaced: {
    fontFamily: FontFamily.MONOSPACED,
  },
  p: {
    fontFamily: FontFamily.PARAGRAPH,
    fontSize: 14,
  },
});
