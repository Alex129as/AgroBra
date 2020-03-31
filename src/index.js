import React from 'react';
import { StatusBar } from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';


import Routes from './routes';

const App = () => (
  <PaperProvider>
    <StatusBar barStyle="light-content" backgroundColor="#0d560c" />
    <Routes />
  </PaperProvider>
);

export default App;