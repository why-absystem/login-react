import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import './App.css';
import mytheme from './mytheme';

import Myheader from './components/myheader'
import Mysidemenu from './components/mysidemenu'

class App extends Component {
  render() {
    return (
			<MuiThemeProvider muiTheme={mytheme}>
				<Myheader/>
				<Mysidemenu/>
			</MuiThemeProvider>
    );
  }
}

export default App;
