import React from 'react';
import ReactDOM from 'react-dom';
import helloWorld from './helloWorld';
import filmTitle from './filmTitle';
import BrokenTimer from './brokenTimer';
import Timer from './timer';

const title = React.createElement(
	"h1",
	{className: "title"},
	"Hello World!"
);

ReactDOM.render(
	title,
	document.getElementById('root')
);