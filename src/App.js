import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

import Myheader from './components/myheader'
import Mysidemenu from './components/mysidemenu'

class App extends Component {
  render() {
    return (
			<MuiThemeProvider>
				<Myheader/>
				<Mysidemenu/>
			</MuiThemeProvider>
    );
  }
}

export default App;
