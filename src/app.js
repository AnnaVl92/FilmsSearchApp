import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search/search.jsx';
import css from './app.css';

const title = React.createElement(
	"h1",
	{className: "title"},
	"My App"
);

ReactDOM.render(
	title,
	document.getElementById('root')
);