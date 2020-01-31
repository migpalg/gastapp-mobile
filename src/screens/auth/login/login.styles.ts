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
    backgroundColor: globalStyles.colors.primary(1),
  },
  registerLinkText: {
    ...globalStyles.fonts.primary,
    marginTop: 40,
    fontSize: 12,
    color: '#FFF',
  },
});
