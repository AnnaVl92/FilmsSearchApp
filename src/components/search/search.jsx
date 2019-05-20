import React from 'react';
//import movies from '../../movies.json';
import FilmsList from '../films/filmsList.jsx';
import SearchInput from './searchInput.jsx';
import SearchButton from './searchButton.jsx';
import Radio from '../radio/radio.jsx';
import EmptyList from  '../films/EmptyList.jsx';
import { connect } from "react-redux";
import { getMovies } from '../../redux/actions';
//import { withRouter } from "react-router-dom";
import FilmPage from '../filmPage/filmPage.jsx';
import queryString from 'query-string';

class Search extends React.Component {
	state = {
		searchValue: '',
		// filteredMovies: [],
		searchFilterValue: 'title',
		sortValue: 'release_date',
		sortByOrderValue: 'asc'
	};

	componentDidMount() {
		if (this.props.match && this.props.match.params.query){
			const params = queryString.parse(this.props.match.params.query);
			this.props.getMovies(params);
			console.log(this.state);
			this.setState({
				searchValue: params.name,
				searchFilterValue: params.searchBy,
				sortValue: params.sortBy,
				sortByOrderValue: params.sortOrder
			});
			console.log("this.state");
			console.log(this.state);
		};
	};

	handleChange = e => {
		//this.props.handleChange();
		this.setState({searchValue: e.target.value});
	}

	handleSubmit = e => {
		//this.props.handleChange();
		e.preventDefault();

		const params = { 
			sortBy : this.state.sortValue,
			sortOrder: this.state.sortByOrderValue, 
			searchBy : this.state.searchFilterValue, 
			name : this.state.searchValue
		};
		this.props.getMovies(params);	
		this.updateQueryString(params);

		// this.setState({
		// 	filteredMovies,
		// 	submitHandled: true
  //   	});
		return false;
	}

	changeSearchFilter = e => {
		const searchFilterValue = e.target.value;
		this.setState({searchFilterValue: e.target.value});
		const params = { 
			sortBy : this.state.sortValue,
			sortOrder: this.state.sortByOrderValue, 
			searchBy : searchFilterValue, 
			name : this.state.searchValue
		}
		this.props.getMovies(params);
		this.updateQueryString(params);
	}

	chooseSort = e => {
		const sortValue = e.target.value;
		this.setState({sortValue: sortValue});
		const params = { 
			sortBy : sortValue,
			sortOrder: this.state.sortByOrderValue, 
			searchBy : this.state.searchFilterValue, 
			name : this.state.searchValue
		};
		this.props.getMovies(params);
		this.updateQueryString(params);
	}

	chooseSortByOrder = e => {
		const sortByOrderValue = e.target.value;
		this.setState({sortByOrderValue: sortByOrderValue});
		const params = { 
			sortBy : this.state.sortValue,
			sortOrder: sortByOrderValue, 
			searchBy : this.state.searchFilterValue, 
			name : this.state.searchValue
		}
		this.props.getMovies(params);
		this.updateQueryString(params);
	}

	updateQueryString = (params) => {
		const encodedParams = queryString.stringify(params);
		this.props.history && this.props.history.push(`/search?${encodedParams}`);
	}

	render() {
		const { movies, getMovies, match, history } = this.props;

		return (
			<React.Fragment>
				<form className="search" onSubmit={(e) => this.handleSubmit(e)} action="/search">
					<div className="form-group row">
						<div className="col-lg-10">
							<SearchInput value={this.state.searchValue} onChange={(e) => this.handleChange(e)} />
						</div>
						<div className="col-lg-2">
							<SearchButton />
						</div>
					</div>
					<div className="d-flex justify-content-between">
						<div className="search-filter d-flex justify-content-between align-items-center form-group">
							SEARCH BY
							<Radio 
								id="searchTitle" 
								name="searchBy" 
								value="title" 
								onChange={this.changeSearchFilter} 
								labelText="TITLE" 
								{...(this.state.searchFilterValue == "title" ? {isDefaultChecked: 'true'} : {})} 
							/>
							<Radio 
								id="searchGenre" 
								name="searchBy" 
								value="genres" 
								onChange={this.changeSearchFilter} 
								labelText="GENRE" 
								{...(this.state.searchFilterValue == "genres" ? {isDefaultChecked: 'true'} : {})} 
							/>
						</div>
						<div className="sort d-flex align-items-start justify-content-between">
							Sort by
							<Radio 
								id="sortReleaseDate" 
								name="sortBy" 
								value="release_date" 
								onChange={this.chooseSort} 
								labelText="release date" 
								{...(this.state.sortValue == "release_date" ? {isDefaultChecked: 'true'} : {})} 
							/>
							<Radio 
								id="sortRating" 
								name="sortBy" 
								value="vote_average" 
								onChange={this.chooseSort} 
								labelText="rating" 
								{...(this.state.sortValue == "vote_average" ? {isDefaultChecked: 'true'} : {})}  
							/>
						</div>
						<div className="sort d-flex align-items-start justify-content-between">
							Order
							<Radio 
								id="ascOrder" 
								name="sortOrder" 
								value="asc" 
								onChange={this.chooseSortByOrder} 
								labelText="asc. order" 
								{...(this.state.sortByOrderValue == "asc" ? {isDefaultChecked: 'true'} : {})} 
							/>
							<Radio 
								id="descOrder" 
								name="sortOrder" 
								value="desc" 
								onChange={this.chooseSortByOrder} 
								labelText="desc. order" 
								{...(this.state.sortByOrderValue == "desc" ? {isDefaultChecked: 'true'} : {})}
							/>
						</div>
					</div>
				</form>
				{
					movies && movies.length ? (
						<React.Fragment>
							<div className="results">{movies.length} movies found</div>
							<FilmsList movies={movies} />
						</React.Fragment>
					) : (
						<EmptyList />
					)
				}
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