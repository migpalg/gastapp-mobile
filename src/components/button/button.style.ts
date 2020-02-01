import {StyleSheet} from 'react-native';
import globalStyles from '../../styles';

export default StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#FFF',
  },
  buttonText: {
    ...globalStyles.fonts.primary,
    fontSize: 14.5,
    textAlign: 'center',
  },
});
