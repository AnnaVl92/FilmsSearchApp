import React from 'react';
import Film from './film.jsx';

function FilmsList (props) {
	const films = props.films.map((film) =>
		<Film key={film.id} film={film} />
    );

	return (
		<div className="films row">{films}</div>
	);
}

export default FilmsList;