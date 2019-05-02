import React from 'react';
import Film from './film.jsx';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { getMovieById } from '../../redux/actions';

class FilmsList extends React.Component {
	state = {
		redirect: false,
		selectedMovieId: null
	};

	handleOnClick = (movieId,event) => {
		this.setState({redirect: true,selectedMovieId:movieId});
		event.preventDefault();
		console.log(movieId);
		this.props.getMovieById({id: movieId});
		return false;
	};

	render() {
		if (this.state.redirect) {
			this.setState({redirect: false});
			return <Redirect push to={`/film/${this.state.selectedMovieId}`} />;
		};
		const { movie, getMovieById } = this.props;

		const movies = this.props.movies.map((movie) =>
			<div className="col-md-4" key={movie.id}>
				<Link to={`/film/${movie.id}`} className="card film" onClick={(e) => this.handleOnClick(movie.id, e)}>
					<Film movie={movie} />
				</Link>
			</div>
		);

		return (
			<div className="films row">{movies}</div>
		);
	}
};


const mapDispatchToProps = {
	getMovieById: getMovieById
};

export default connect(null, mapDispatchToProps)(FilmsList);