import AuthStack from './auth';
import AppStack from './app';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

const RootNavigation = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNavigation);
