import {StyleSheet} from 'react-native';
import globalStyles from '../../../styles';

export default StyleSheet.create({
  card: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#F2F2F2',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  optionContainer: {
    backgroundColor: globalStyles.colors.primary(1),
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  optionContainerContent: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    alignSelf: 'flex-start',
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
    paddingHorizontal: 10,
    paddingVertical: 5,
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
