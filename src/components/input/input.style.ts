import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingVertical: 8,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderWidth: 1.5,
  },
  inputText: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    flex: 1,
  },
  prependButton: {
    marginLeft: 10,
    color: '#AAA',
  },
});
