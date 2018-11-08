import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Success = () => (
  <MuiThemeProvider>
    <React.Fragment>
      <AppBar title="Success" />
      <h1>Thank You For Your Submission</h1>
      <p>If this had a real back-end you would get an email with further instructions</p>
    </React.Fragment>
  </MuiThemeProvider>
);

export default Success;