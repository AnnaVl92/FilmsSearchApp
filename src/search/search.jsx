import React from 'react';
import data from '../data.json';
import FilmsList from '../films/filmsList.jsx';

class Search extends React.Component {
	state = {
		searchValue: '',
		films: [],
		filteredFilms: [],
		searchFilterValue: 'title',
		sortValue: '',
		sortedFilms: [],
		isSelectedFilm: false
	};

	constructor(props) {
		super(props);

		this.handleChange = ::this.handleChange;
		this.handleSubmit = ::this.handleSubmit;
		this.changeSearchFilter = ::this.changeSearchFilter;
		this.chooseSort = ::this.chooseSort;
		this.sortFilms = ::this.sortFilms;
	}

	componentDidMount() {
		this.setState({
			films: data.films,
			filteredFilms: data.films,
			sortedFilms: data.films
		});
	}

	changeSearchFilter(e) {
		this.setState({searchFilterValue: e.target.value});
	}

	handleChange(e) {
		this.setState({searchValue: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		var searchValue = this.state.searchValue,
			films = this.state.films,
			searchFilterValue = this.state.searchFilterValue,
			filteredFilms = films.filter(function(i) {
				if (searchFilterValue == 'title'){
					return  i.title && i.title.toLowerCase().match(searchValue);
				} else if (searchFilterValue == 'genre'){
					return  i.genre && i.genre.toLowerCase().match(searchValue);
				}
	    	});
		this.setState({
			filteredFilms
    	});
    	this.applySort(filteredFilms,this.state.sortValue);
		return false;
	}

	applySort(films,sortValue){
		this.setState({
			sortedFilms : this.sortFilms(films, sortValue)
		})
	}

	sortFilms(films, sortValue) {
		return films.sort(function (prevFilm, nextFilm) {
			if (sortValue == "releaseDate"){
				if (prevFilm.releaseDate > nextFilm.releaseDate) {
					return 1;
 				} else if (prevFilm.releaseDate < nextFilm.releaseDate) {
					return -1;
				}
			} else if (sortValue == "rating"){
				if (prevFilm.rating > nextFilm.rating) {
					return 1;
 				} else if (prevFilm.rating < nextFilm.rating) {
					return -1;
				}
			}
			return 0;
		})
	}

	chooseSort(e) {
		var sortValue = e.target.value;
		this.setState({sortValue: sortValue});
		this.applySort(this.state.filteredFilms,sortValue);
	}

	render() {
		return (
			<React.Fragment>
				<form className="search" onSubmit={this.handleSubmit}>
					<div className="form-group row">
						<label className="col-lg-10">
							Find Your Movie
							<input type="text" value={this.state.searchValue} onChange={this.handleChange} className="form-control" />
						</label>
						<div className="col-lg-2">
							<button type="submit" className="search-button btn btn-primary">Search</button>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="search-filter d-flex justify-content-between align-items-center form-group">
							SEARCH BY
							<div className="form-check">
								<input className="form-check-input" id="searchTitle" type="radio" value="title" name="searchFilter" defaultChecked onChange={this.changeSearchFilter} />
								<label className="form-check-label" htmlFor="searchTitle">
									TITLE
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" id="searchGenre" type="radio" value="genre" name="searchFilter" onChange={this.changeSearchFilter} />
								<label className="form-check-label" htmlFor="searchGenre">
									GENRE
								</label>
							</div>
						</div>
						<div className="sort d-flex align-items-start justify-content-between">
							Sort by
							<div className="form-check">
								<input className="form-check-input" id="sortReleaseDate" type="radio" value="releaseDate" name="sort" onChange={this.chooseSort} />
								<label className="form-check-label" htmlFor="sortReleaseDate">
									release date
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" id="sortRating" type="radio" value="rating" name="sort" onChange={this.chooseSort} />
								<label className="form-check-label" htmlFor="sortRating">
									rating
								</label>
							</div>
						</div>
					</div>
				</form>
				<div className="results">{this.state.filteredFilms.length} movies found</div>
				<FilmsList films={this.state.sortedFilms} />
			</React.Fragment>
		);
	}
}

export default Search;