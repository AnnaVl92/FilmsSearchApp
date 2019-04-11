import React from 'react';
import data from '../../data.json';
import FilmsList from '../films/filmsList.jsx';
import Radio from '../radio/radio.jsx';
import SearchInput from './searchInput.jsx';

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

	componentDidMount() {
		this.setState({
			films: data.films,
			filteredFilms: data.films,
			sortedFilms: data.films
		});
	}

	changeSearchFilter = e => {
		this.setState({searchFilterValue: e.target.value});
	}

	handleChange = e => {
		this.setState({searchValue: e.target.value});
	}

	handleSubmit = e => {
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

	sortFilms = (films, sortValue) => {
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

	chooseSort = e => {
		var sortValue = e.target.value;
		this.setState({sortValue: sortValue});
		this.applySort(this.state.filteredFilms,sortValue);
	}

	render() {
		return (
			<React.Fragment>
				<form className="search" onSubmit={this.handleSubmit}>
					<div className="form-group row">
						<div className="col-lg-10">
							<SearchInput value={this.state.searchValue} onChange={this.handleChange} />
						</div>
						<div className="col-lg-2">
							<button type="submit" className="search-button btn btn-primary">Search</button>
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="search-filter d-flex justify-content-between align-items-center form-group">
							SEARCH BY
							<Radio id="searchTitle" name="searchFilter" value="title" onChange={this.changeSearchFilter} labelText="TITLE" isDefaultChecked />
							<Radio id="searchGenre" name="searchFilter" value="genre" onChange={this.changeSearchFilter} labelText="GENRE" />
						</div>
						<div className="sort d-flex align-items-start justify-content-between">
							Sort by
							<Radio id="sortReleaseDate" name="sort" value="releaseDate" onChange={this.chooseSort} labelText="release date" />
							<Radio id="sortRating" name="sort" value="rating" onChange={this.chooseSort} labelText="rating" />
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