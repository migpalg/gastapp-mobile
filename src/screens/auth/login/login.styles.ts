import {StyleSheet} from 'react-native';
import globalStyles from '../../../styles';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  headerTitle: {
    ...globalStyles.fonts.h1,
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20,
  },
  loginInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: 'transparent',
    padding: 0,
  },
  loginInputText: {
    ...globalStyles.fonts.p,
    fontSize: 16,
    padding: 0,
    margin: 0,
  },
  passwordInput: {
    marginTop: 20,
  },
});
