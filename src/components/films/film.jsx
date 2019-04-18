import React from 'react';

function Film (props) {
	const film = props.film;
	return (
		<div className="col-md-4">
			<div className="card film">
				<div className="film-img-cnt">
					<img className="card-img-top" src={film.poster_path} alt="" />
				</div>
				<div className="card-body">
					<h2 className="card-title">{film.title}</h2>
					<p className="film-year">{film.release_date}</p>
					<p className="film-genre">{film.genres.join()}</p>
				</div>
			</div>
		</div>
	);
}

export default Film;