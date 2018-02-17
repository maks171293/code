'use strict';
import React, { Component } from 'react';

import {
    AppRegistry,
} from 'react-native';

import App from './app/app.js';

/**
 *start app
 */
const GongPartner = () => {
  return (
      <App />
  );
};

AppRegistry.registerComponent('GongPartner', () => GongPartner);
