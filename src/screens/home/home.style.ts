import {StyleSheet, StatusBar} from 'react-native';
import globalStyles from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: globalStyles.colors.black(1 / 20),
    flex: 1,
  },
  hero: {
    paddingHorizontal: 20,
    paddingTop: 20 + (StatusBar.currentHeight || 0),
    position: 'relative',
    zIndex: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  heroBgWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: globalStyles.colors.black(1),
  },
  heroText: {
    ...globalStyles.fonts.h1,
    fontSize: 14,
    color: '#FFF',
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  balanceText: {
    ...globalStyles.fonts.monospaced,
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    paddingVertical: 60,
  },
  searchBar: {
    borderWidth: 0,
    elevation: 11,
    shadowColor: globalStyles.colors.black(0.6),
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    alignSelf: 'center',
    width: '90%',
    position: 'absolute',
    bottom: -18,
  },
  contentContainer: {
    flex: 1,
  },
  contentTopSizedBox: {
    height: 40,
  },
  subscriptionCard: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
  text: {
    ...globalStyles.fonts.p,
  },
  contentTitle: {
    ...globalStyles.fonts.h1,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
    color: globalStyles.colors.black(0.4),
  },
  heroFloatCircle: {
    borderColor: globalStyles.colors.black(0.2),
    borderRadius: 100,
    borderWidth: 30,
    height: 200,
    width: 200,
    position: 'absolute',
    bottom: -100,
    left: -50,
    transform: [{rotate: '-25deg'}],
  },
  heroFloatRect: {
    position: 'absolute',
    height: 150,
    width: 150,
    borderRadius: 30,
    top: -40,
    right: -40,
    transform: [{rotate: '20deg'}],
    backgroundColor: globalStyles.colors.black(0.3),
  },
});
