import React from 'react';
import ReactDOM from 'react-dom';
import helloWorld from './helloWorld.jsx';
import filmTitle from './filmTitle';

const title = React.createElement(
	"h1",
	{className: "title"},
	"Hello World!"
);

ReactDOM.render(
	title,
	document.getElementById('root')
);