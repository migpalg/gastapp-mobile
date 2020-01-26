import {StyleSheet} from 'react-native';
import globalStyles from '../../../styles';

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
  },
  cardImageContainer: {
    height: 70,
    width: 70,
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 5,
    backgroundColor: globalStyles.colors.black(0.2),
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
});
