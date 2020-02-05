import React, {FunctionComponent} from 'react';
import AppRouter from '../../router';
import {enableScreens} from 'react-native-screens';

// Activates library
enableScreens();

const App: FunctionComponent = () => <AppRouter />;

export default App;
