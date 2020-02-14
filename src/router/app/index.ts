import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../../screens';

// TODO: Bottom navigation bar
export default createStackNavigator(
  {
    Home: Home,
  },
  {
    headerMode: 'none',
  },
);
