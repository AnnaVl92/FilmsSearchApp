import React from 'react';
// import movies from '../../movies.json';
import FilmsList from '../films/filmsList.jsx';
import { connect } from "react-redux";

class FilmPage extends React.Component {
	// state = {
	// 	film: {},
	// 	similarFilms: movies.data
	// };

	// componentDidMount() {
	// 	this.setState({
	// 		film: movies.data[0]
	// 	});
	// }

	render() {
		const { movies, movie } = this.props;
		console.log(movies);

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
				<FilmsList films={movies} />
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		movies: state.movies,
		movie: state.movie
	};
};

export default connect(mapStateToProps, null)(FilmPage); 