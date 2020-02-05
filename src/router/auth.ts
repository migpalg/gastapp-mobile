import {createStackNavigator} from 'react-navigation-stack';
import {Auth} from '../screens';

export default createStackNavigator(
  {
    Login: Auth.Login,
    Register: Auth.Register,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);
