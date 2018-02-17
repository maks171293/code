
import React, { Component } from 'react';

import {
    AppRegistry,
} from 'react-native';

import App from './app/app.js';

/**
 *start app
 */
const Gong = () => {
  return (
      <App />
  );
};

AppRegistry.registerComponent('Gong', () => Gong);
