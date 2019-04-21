import React from 'react';

function Film (props) {
	const movie = props.movie;
	return (
		<div className="col-md-4">
			<div className="card film">
				<div className="film-img-cnt">
					<img className="card-img-top" src={movie.poster_path} alt="" />
				</div>
				<div className="card-body">
					<h2 className="card-title">{movie.title}</h2>
					<p className="film-year">{movie.release_date}</p>
					<p className="film-genre">{movie.genres.join()}</p>
				</div>
			</div>
		</div>
	);
}

export default Film;