import React from 'react';
import Film from './film.jsx';
// import { Link } from "react-router-dom";
import Link from 'next/link';

class FilmsList extends React.Component {
	
	render() {
		const movies = (this.props.movies||[]).map((movie) =>
			<div className="col-md-4">
				<Link as={`/film/${movie.id}`} href={`/film?id=${movie.id}`} key={movie.id}>
					<a className="card film"><Film movie={movie} /></a>
				</Link>
			</div>
		);

		return (
			<div className="films row">{movies}</div>
		);
	}
};

export default FilmsList;