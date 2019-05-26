// @flow
import React from 'react';
import Film from './film.jsx';
// import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { FilmLink } from './films.styles.js';

type FilmsListProps = {
	movies: Array<any>
};

function FilmsList(props: FilmsListProps) {
	const movies = (props.movies || []).map(movie => (
		<Col md={4} key={movie.id}>
			<FilmLink href={`/film?id=${movie.id}`}><Film movie={movie} /></FilmLink>
		</Col>
	));

	return (
		<Row>{movies}</Row>
	);
}

export default FilmsList;
