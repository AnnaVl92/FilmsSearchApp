/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Film from './film.jsx';
// import { Link } from "react-router-dom";

function FilmsList(props) {
	const movies = (props.movies || []).map(movie => (
		<div className="col-md-4" key={movie.id}>
			<Link as={`/film/${movie.id}`} href={`/film?id=${movie.id}`}>
				<a className="card film"><Film movie={movie} /></a>
			</Link>
		</div>
	));

	return (
		<div className="films row">{movies}</div>
	);
}

export default FilmsList;
