import {StyleSheet} from 'react-native';
import globalStyles from '../../styles';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 6,
  },
  inputText: {
    ...globalStyles.fonts.p,
    paddingVertical: 0,
    paddingHorizontal: 20,
    fontSize: 14.5,
    flex: 1,
  },
  prependButton: {
    marginLeft: 10,
  },
  outlineInput: {
    backgroundColor: 'transparent',
    borderColor: globalStyles.colors.black(0.2),
    borderWidth: 1,
  },
});
