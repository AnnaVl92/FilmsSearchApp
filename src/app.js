import React from 'react';
import ReactDOM from 'react-dom';
import css from './app.css';
import Search from './search/search.jsx';
import Sort from './sort/sort.jsx';

const title = React.createElement(
	"h1",
	{className: "title"},
	"My App"
);

ReactDOM.render(
	title,
	document.getElementById('root')
);