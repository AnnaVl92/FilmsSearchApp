// @flow
/* eslint-disable no-shadow */
import React from 'react';
// import movies from '../../movies.json';
import { connect } from 'react-redux';
import FilmsList from '../films/filmsList.jsx';
import { getMovieById, getMoviesBySimilarGenre } from '../../redux/actions';
// import { /*Link,*/ withRouter } from "react-router-dom";
import { Container, Row, Col, Badge } from 'react-bootstrap';
import {
	SearchLinkContainer,
	SearchLink,
	FilmPageImg,
	FilmPageTitle,
	FilmPageRelease,
	FilmPageDuration,
	FilmsSimilarGenre
} from './filmPage.styles.js';

type FilmPageProps = {
	similarMovies: Array<Object>,
	getMovieById: Function,
	getMoviesBySimilarGenre: Function,
	match: Object,
	movie: Object
};

class FilmPage extends React.Component<FilmPageProps> {
	componentDidMount() {
		if (this.props.match) {
			this.props.getMovieById(+this.props.match.params.id);
		}
	}

	componentWillReceiveProps(nextProps) {
		// eslint-disable-next-line no-prototype-builtins
		if (!this.props.movie.hasOwnProperty('genres') && nextProps.movie.hasOwnProperty('genres')) {
			this.props.getMoviesBySimilarGenre(nextProps.movie.genres[0]);
		}
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		const { similarMovies, movie, match, getMovieById, getMoviesBySimilarGenre } = this.props;

		return (
			<Container fluid>
				<SearchLinkContainer>
					<SearchLink href="/">SEARCH</SearchLink>
				</SearchLinkContainer>
				<Row>
					<Col lg={4}>
						<FilmPageImg className="film-page-img" src={movie.poster_path} alt="" />
					</Col>
					<Col lg={8}>
						<h1>
							<FilmPageTitle>{movie.title}</FilmPageTitle>
							<Badge variant="success">
								{movie.vote_average}
							</Badge>
						</h1>
						<p>{movie.genres}</p>
						<FilmPageRelease>
							{movie.release_date}
							<FilmPageDuration>{movie.runtime} min</FilmPageDuration>
						</FilmPageRelease>
						<p>{movie.overview}</p>
					</Col>
				</Row>
				<FilmsSimilarGenre>
					Film by {movie.genres} genre
				</FilmsSimilarGenre>
				<FilmsList movies={similarMovies} />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	similarMovies: state.similarMovies,
	movie: state.movie
});

const mapDispatchToProps = {
	getMovieById,
	getMoviesBySimilarGenre
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
