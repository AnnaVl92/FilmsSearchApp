import React from 'react';
import ReactDOM from 'react-dom';

function Film (props) {
	const film = props.film;
	return (
		<div className="col-md-4">
			<div className="card film">
				<div className="film-img-cnt">
					<img className="card-img-top" src={film.img} alt="" />
				</div>
				<div className="card-body">
					<a href="#">{film.name}</a>
					<p className="film-year">{film.releaseDate}</p>
					<p className="film-genre">{film.genre}</p>
				</div>
			</div>
		</div>
	);
}

export default Film;