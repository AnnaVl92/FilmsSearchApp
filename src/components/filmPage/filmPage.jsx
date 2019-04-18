import React from 'react';
import movies from '../../movies.json';
import FilmsList from '../films/filmsList.jsx';

class FilmPage extends React.Component {
	state = {
		film: {},
		similarFilms: movies.data
	};

	componentDidMount() {
		this.setState({
			film: movies.data[0]
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="d-flex flex-row-reverse">
					<a className="btn btn-primary" href="#">SEARCH</a>
				</div>
				<div className="row film-page">
					<div className="col-lg-4">
						<img className="film-page-img" src={this.state.film.poster_path} alt="" />
					</div>
					<div className="col-lg-8">
						<h2>
							{this.state.film.title}
							<span className="film-badge badge badge-success">
								{this.state.film.vote_average}
							</span>
						</h2>
						<p>{this.state.film.genres}</p>
						<p className="font-weight-bold">
							{this.state.film.release_date}
							<span className="film-page-duration">{this.state.film.runtime}</span>
						</p>
						<p>{this.state.film.overview}</p>
					</div>
				</div>
				<div className="films-similar-genre">Film by {this.state.film.genres} genre</div>
				<FilmsList films={this.state.similarFilms} />
			</React.Fragment>
		)
	}
}

export default FilmPage; 