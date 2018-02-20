import React, { Component } from 'react';
import Field from './components/Field'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <header>

            <Field />
          </header>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
