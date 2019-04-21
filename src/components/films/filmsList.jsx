import React from 'react';
import Film from './film.jsx';

function FilmsList (props) {
	const movies = props.movies.map((movie) =>
		<Film key={movie.id} movie={movie} />
    );

	return (
		<div className="films row">{movies}</div>
	);
}

export default FilmsList;