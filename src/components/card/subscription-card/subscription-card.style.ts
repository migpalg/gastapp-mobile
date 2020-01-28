import {StyleSheet} from 'react-native';
import globalStyles from '../../../styles';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardImageContainer: {
    height: 70,
    width: 70,
    overflow: 'hidden',
    borderRadius: 5,
    borderColor: '#DDD',
    borderWidth: 1,
  },
  cardImage: {
    height: '100%',
    width: '100%',
  },
  cardTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    ...globalStyles.fonts.h1,
    fontSize: 13,
  },
  cardSubtitle: {
    ...globalStyles.fonts.primary,
    fontSize: 12,
  },
  cardSubtitleAppend: {
    fontSize: 10,
    color: globalStyles.colors.black(0.4),
  },
  dateContainer: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dateContainerText: {
    textAlign: 'center',
    fontSize: 10,
  },
  dateContainerNumber: {
    fontSize: 20,
  },
});
