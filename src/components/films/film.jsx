import React from 'react';

function Film (props) {
	const movie = props.movie;

	return (
		<React.Fragment>
			<div className="film-img-cnt">
				<img className="card-img-top" src={movie.poster_path} alt="" />
			</div>
			<div className="card-body">
				<h2 className="card-title">{movie.title}</h2>
				<p className="film-year">{movie.release_date}</p>
				<p className="film-genre">{movie.genres.join()}</p>
			</div>
		</React.Fragment>
	);
}

export default Film;