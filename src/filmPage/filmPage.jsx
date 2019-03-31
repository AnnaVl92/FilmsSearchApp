import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data.json';
import FilmsList from '../films/filmsList.jsx';

class FilmPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			film: {},
			similarFilms: data.films
		};
	}

	componentDidMount() {
		this.setState({
			film: data.films[0]
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
						<img className="film-page-img" src={this.state.film.img} alt="" />
					</div>
					<div className="col-lg-8">
						<h2>
							{this.state.film.title}
							<span className="film-badge badge badge-success">
								{this.state.film.rating}
							</span>
						</h2>
						<p>{this.state.film.genre}</p>
						<p className="font-weight-bold">
							{this.state.film.releaseDate}
							<span className="film-page-duration">{this.state.film.duration}</span>
						</p>
						<p>{this.state.film.description}</p>
					</div>
				</div>
				<div className="films-similar-genre">Film by {this.state.film.genre} genre</div>
				<FilmsList films={this.state.similarFilms} />
			</React.Fragment>
		)
	}
}

export default FilmPage; 