import React from 'react';
import Film from './film.jsx';
//import { Link } from "react-router-dom";
import Link from 'next/link';

class FilmsList extends React.Component {
	
	render() {
		const movies = (this.props.movies||[]).map((movie) =>
			<div className="col-md-4" key={movie.id}>
				<Link to={`/film/${movie.id}`} className="card film">
					<Film movie={movie} />
				</Link>
			</div>
		);

		return (
			<div className="films row">{movies}</div>
		);
	}
};

export default FilmsList;