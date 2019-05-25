import React from 'react';
import ReactDOM from 'react-dom';

const FilmTitle = ({ title }) => (
	<div>
		Film Title: {title}
	</div>
);

ReactDOM.render(
	<FilmTitle title="IT" />,
	document.getElementById('filmTitle')
);
