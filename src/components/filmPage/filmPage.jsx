import React from 'react';
// import movies from '../../movies.json';
import FilmsList from '../films/filmsList.jsx';
import { connect } from "react-redux";
import { getMovieById, getMoviesBySimilarGenre } from '../../redux/actions';
//import { /*Link,*/ withRouter } from "react-router-dom";
import Link from 'next/link';

class FilmPage extends React.Component {

	componentDidMount() {
		if (this.props.match){
			this.props.getMovieById(+this.props.match.params.id);
		}
	};

	componentWillReceiveProps(nextProps) {
		if (!this.props.movie.hasOwnProperty('genres') && nextProps.movie.hasOwnProperty('genres')){
			this.props.getMoviesBySimilarGenre(nextProps.movie.genres[0]);
		};
	};

	render() {
		const { similarMovies, movie, match, getMovieById, getMoviesBySimilarGenre } = this.props;

		return (
			<React.Fragment>
				<div className="d-flex flex-row-reverse">
					<Link href="/"><a className="btn btn-primary">SEARCH</a></Link>
				</div>
				<div className="row film-page">
					<div className="col-lg-4">
						<img className="film-page-img" src={movie.poster_path} alt="" />
					</div>
					<div className="col-lg-8">
						<h2>
							{movie.title}
							<span className="film-badge badge badge-success">
								{movie.vote_average}
							</span>
						</h2>
						<p>{movie.genres}</p>
						<p className="font-weight-bold">
							{movie.release_date}
							<span className="film-page-duration">{movie.runtime}</span>
						</p>
						<p>{movie.overview}</p>
					</div>
				</div>
				<div className="films-similar-genre">Film by {movie.genres} genre</div>
				<FilmsList movies={similarMovies} />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		similarMovies: state.similarMovies,
		movie: state.movie
	};
};

const mapDispatchToProps = {
	getMovieById: getMovieById,
	getMoviesBySimilarGenre: getMoviesBySimilarGenre
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);