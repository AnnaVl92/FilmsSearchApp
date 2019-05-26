// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { FilmImageContainer } from './films.styles.js';

type FilmProps = {
	movie: {
		title: string,
		poster_path: string,
		release_date: string,
		genres: Array<string>
	}
};

function Film(props: FilmProps) {
	const { movie } = props;

	return (
		<Card>
			<FilmImageContainer>
				<Card.Img variant="top" src={movie.poster_path} alt="" />
			</FilmImageContainer>
			<Card.Body>
				<h2>{movie.title}</h2>
				<p>{movie.release_date}</p>
				<p>{movie.genres.join()}</p>
			</Card.Body>
		</Card>
	);
}

export default Film;
