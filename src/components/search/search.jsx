import React from 'react';
//import movies from '../../movies.json';
import FilmsList from '../films/filmsList.jsx';
import SearchInput from './searchInput.jsx';
import SearchButton from './searchButton.jsx';
import Radio from '../radio/radio.jsx';
import { connect } from "react-redux";
import { getMovies } from '../../redux/actions';
import { BrowserRouter as Router } from "react-router-dom";
import FilmPage from '../filmPage/filmPage.jsx';

class Search extends React.Component {
	state = {
		searchValue: '',
		filteredMovies: [],
		searchFilterValue: 'title',
		sortValue: 'release_date',
		sortByOrderValue: 'asc',
		sortedMovies: [],
		isSelectedMovie: false
	};

	changeSearchFilter = e => {
		this.setState({searchFilterValue: e.target.value});
	}

	handleChange = e => {
		//this.props.handleChange();
		this.setState({searchValue: e.target.value});
	}

	handleSubmit = e => {
		//this.props.handleChange();
		e.preventDefault();
		console.log(this.state.sortValue);
		this.props.getMovies({ 
			sortBy : this.state.sortValue,
			sortOrder: this.state.sortByOrderValue, 
			searchBy : this.state.searchFilterValue, 
			name : this.state.searchValue
		});
		// this.setState({
		// 	filteredMovies,
		// 	submitHandled: true
  //   	});
		return false;
	}

	chooseSort = e => {
		var sortValue = e.target.value;
		this.setState({sortValue: sortValue});
		this.props.getMovies({ 
			sortBy : sortValue,
			sortOrder: this.state.sortByOrderValue, 
			searchBy : this.state.searchFilterValue, 
			name : this.state.searchValue
		});
	}

	chooseSortByOrder = e => {
		var sortByOrderValue = e.target.value;
		this.setState({sortByOrderValue: sortByOrderValue});
		this.props.getMovies({ 
			sortBy : this.state.sortValue,
			sortOrder: sortByOrderValue, 
			searchBy : this.state.searchFilterValue, 
			name : this.state.searchValue
		});
	}

	render() {
		const { movies, getMovies } = this.props;

		return (
			<React.Fragment>
				<form className="search" onSubmit={(e) => this.handleSubmit(e)}>
					<div className="form-group row">
						<div className="col-lg-10">
							<SearchInput value={this.searchValue} onChange={(e) => this.handleChange(e)} />
						</div>
						<div className="col-lg-2">
							<SearchButton />
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="search-filter d-flex justify-content-between align-items-center form-group">
							SEARCH BY
							<Radio id="searchTitle" name="searchFilter" value="title" onChange={this.changeSearchFilter} labelText="TITLE" isDefaultChecked />
							<Radio id="searchGenre" name="searchFilter" value="genres" onChange={this.changeSearchFilter} labelText="GENRE" />
						</div>
						<div className="sort d-flex align-items-start justify-content-between">
							Sort by
							<Radio id="sortReleaseDate" name="sort" value="release_date" onChange={this.chooseSort} labelText="release date" isDefaultChecked />
							<Radio id="sortRating" name="sort" value="vote_average" onChange={this.chooseSort} labelText="rating" />
						</div>
						<div className="sort d-flex align-items-start justify-content-between">
							Sort by
							<Radio id="ascOrder" name="sortByOrder" value="asc" onChange={this.chooseSortByOrder} labelText="asc. order" isDefaultChecked />
							<Radio id="descOrder" name="sortByOrder" value="desc" onChange={this.chooseSortByOrder} labelText="desc. order" />
						</div>
					</div>
				</form>
				<div className="results">{movies.length} movies found</div>
				<Router>
					<FilmsList movies={movies} />
				</Router>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		movies: state.movies,
	};
};

const mapDispatchToProps = {
	getMovies: getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);