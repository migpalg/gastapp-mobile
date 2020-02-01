import {StyleSheet} from 'react-native';
import globalStyles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  formContainer: {
    width: '80%',
  },
  headerTitle: {
    ...globalStyles.fonts.h1,
    textAlign: 'center',
    fontSize: 45,
    marginBottom: 60,
    color: '#FFF',
    textShadowColor: globalStyles.colors.black(0.5),
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 1,
  },
  loginInput: {
    borderWidth: 1,
    borderColor: '#FFF',
  },
  loginInputText: {
    color: '#FFF',
  },
  withMargin: {
    marginTop: 20,
  },
  loginButton: {
    elevation: 0,
  },
  registerLinkText: {
    ...globalStyles.fonts.primary,
    marginTop: 40,
    fontSize: 12,
    color: '#FFF',
  },
  decoration: {
    position: 'absolute',
  },
  decorationBottomRight: {
    borderColor: globalStyles.colors.black(0.15),
    borderWidth: 30,
    right: -50,
    bottom: -100,
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
  },
  decorationTopLeft: {
    top: -130,
    left: -80,
    height: 280,
    width: 280,
    borderRadius: 30,
    backgroundColor: globalStyles.colors.black(0.15),
  },
});
