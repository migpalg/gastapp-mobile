import {StyleSheet, Platform, StatusBar} from 'react-native';
import globalStyles from '../../../styles';

export default StyleSheet.create({
  arrowBack: {
    marginTop: 15,
    marginLeft: 5,
    alignItems: 'flex-start',
  },
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    backgroundColor: globalStyles.colors.black(0.03),
  },
  container: {
    padding: 35,
  },
  title: {
    ...globalStyles.fonts.h1,
    fontSize: 28,
    marginBottom: 40,
  },
  registerInput: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: globalStyles.colors.primary(1),
  },
  termsAndConditionsText: {
    ...globalStyles.fonts.p,
    textAlign: 'center',
    fontSize: 12,
    marginTop: 20,
    opacity: 0.5,
    paddingHorizontal: 40,
  },
});
