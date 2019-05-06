import React from 'react';
// import movies from '../../movies.json';
import FilmsList from '../films/filmsList.jsx';
import { connect } from "react-redux";
import { getMovieById, getMoviesBySimilarGenre } from '../../redux/actions';
import { withRouter } from "react-router-dom";

class FilmPage extends React.Component {

	componentDidMount() {
		this.props.getMovieById(+this.props.match.params.id);
		// this.setState({
		// 	selectedMovie:this.props.getMovieById(+this.props.match.params.id),
		// 	similarMovies:this.props.getMoviesBySimilarGenre(this.state.selectedMovie.genres)
		// });
	};

	render() {
		const { movies, movie, match, getMovieById, getMoviesBySimilarGenre } = this.props;
		// getMovieById(+match.params.id);
		console.log(match);
		// console.log(typeof +match.params.id);
		console.log(this.props);
		

		return (
			<React.Fragment>
				<div className="d-flex flex-row-reverse">
					<a className="btn btn-primary" href="#">SEARCH</a>
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
				<FilmsList movies={movies} />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		movies: state.similarMovies,
		movie: state.movie
	};
};

const mapDispatchToProps = {
	getMovieById: getMovieById,
	getMoviesBySimilarGenre: getMoviesBySimilarGenre
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmPage)); 