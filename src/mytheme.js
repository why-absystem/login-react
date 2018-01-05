import React, { Component } from 'react';
import {
	pinkA200,
	grey100, grey300, grey400, grey500,
	white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const mytheme = getMuiTheme({
	fontFamily: 'Roboto, sans-serif',
	palette: {
		textColor: fullBlack,
	}
});

export default mytheme;
