import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../../screens';

export default createStackNavigator(
  {
    Home: Home,
  },
  {
    headerMode: 'none',
  },
);
