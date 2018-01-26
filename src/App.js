import React, { Component } from 'react';
import Field from './components/Field'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <Field />
          </header>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
