// @flow
/* eslint-disable no-shadow */
import React from 'react';
// import movies from '../../movies.json';
import { connect } from 'react-redux';
import queryString from 'query-string';
import FilmsList from '../films/filmsList.jsx';
import SearchInput from './searchInput.jsx';
import SearchButton from './searchButton.jsx';
import Radio from '../radio/radio.jsx';
import EmptyList from '../films/EmptyList.jsx';
import { getMovies } from '../../redux/actions';
// import { withRouter } from "react-router-dom";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { RadioLabel, Results } from './search.styles.js';

type SearchProps = {
	movies: Array<Object>,
	getMovies: Function,
	match: Object,
	history: Object
};

type SearchState = {
	searchValue: string,
	searchFilterValue: string,
	sortValue: string | null,
	sortByOrderValue: string | null,
	searchPerformed: boolean
}

class Search extends React.Component<SearchProps, SearchState> {
	state: SearchState = {
		searchValue: '',
		// filteredMovies: [],
		searchFilterValue: 'title',
		sortValue: 'release_date',
		sortByOrderValue: 'asc',
		searchPerformed: !process.browser
	};

	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);
		const name = urlParams.get('name');
		const searchBy = urlParams.get('searchBy');
		const sortBy = urlParams.get('sortBy');
		const sortOrder = urlParams.get('sortOrder');
		if (name && searchBy) {
		// if (this.props.match && this.props.match.params.query) {
			// const params = queryString.parse(this.props.match.params.query);
			const params = {
				name,
				searchBy,
				sortBy,
				sortOrder
			};

			this.props.getMovies(params);

			this.setState({
				searchValue: params.name,
				searchFilterValue: params.searchBy,
				sortValue: params.sortBy,
				sortByOrderValue: params.sortOrder,
				searchPerformed: true
			});
		}
	}

	handleChange = (e) => {
		// this.props.handleChange();
		this.setState({ searchValue: e.target.value });
	}

	handleSubmit = (e) => {
		// this.props.handleChange();
		e.preventDefault();

		const params = {
			sortBy: this.state.sortValue,
			sortOrder: this.state.sortByOrderValue,
			searchBy: this.state.searchFilterValue,
			name: this.state.searchValue
		};

		this.setState({ searchPerformed: true });
		this.props.getMovies(params);
		this.updateQueryString(params);

		// this.setState({
		// 	filteredMovies,
		// 	submitHandled: true
		//   	});
		return false;
	}

	changeSearchFilter = (e) => {
		const searchFilterValue = e.target.value;
		this.setState({ searchFilterValue: e.target.value });
		const params = {
			sortBy: this.state.sortValue,
			sortOrder: this.state.sortByOrderValue,
			searchBy: searchFilterValue,
			name: this.state.searchValue
		};
		this.props.getMovies(params);
		this.updateQueryString(params);
	}

	chooseSort = (e) => {
		const sortValue = e.target.value;
		this.setState({ sortValue });
		const params = {
			sortBy: sortValue,
			sortOrder: this.state.sortByOrderValue,
			searchBy: this.state.searchFilterValue,
			name: this.state.searchValue
		};
		this.props.getMovies(params);
		this.updateQueryString(params);
	}

	chooseSortByOrder = (e) => {
		const sortByOrderValue = e.target.value;
		this.setState({ sortByOrderValue });
		const params = {
			sortBy: this.state.sortValue,
			sortOrder: sortByOrderValue,
			searchBy: this.state.searchFilterValue,
			name: this.state.searchValue
		};
		this.props.getMovies(params);
		this.updateQueryString(params);
	}

	updateQueryString = (params) => {
		const encodedParams = queryString.stringify(params);
		if (this.props.history) {
			this.props.history.push(`/search?${encodedParams}`);
		}
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		const { movies, getMovies, match, history } = this.props;

		return (
			<Container fluid>
				<Form onSubmit={e => this.handleSubmit(e)} action="/search">
					<Form.Group>
						<h1>Find Your Movie</h1>
						<Row>
							<Col lg={10}>
								<SearchInput value={this.state.searchValue} onChange={e => this.handleChange(e)} />
							</Col>
							<Col lg={2}>
								<SearchButton />
							</Col>
						</Row>
					</Form.Group>
					<Form.Group>
						<Row>
							<Col lg={4}>
								<RadioLabel>SEARCH BY</RadioLabel>
								<Radio
									id="searchTitle"
									name="searchBy"
									value="title"
									onChange={this.changeSearchFilter}
									labelText="TITLE"
									{...(this.state.searchFilterValue === 'title' ? { isDefaultChecked: 'true' } : {})}
								/>
								<Radio
									id="searchGenre"
									name="searchBy"
									value="genres"
									onChange={this.changeSearchFilter}
									labelText="GENRE"
									{...(this.state.searchFilterValue === 'genres' ? { isDefaultChecked: 'true' } : {})}
								/>
							</Col>
							<Col lg={4}>
								<RadioLabel>Sort by</RadioLabel>
								<Radio
									id="sortReleaseDate"
									name="sortBy"
									value="release_date"
									onChange={this.chooseSort}
									labelText="release date"
									{...(this.state.sortValue === 'release_date' ? { isDefaultChecked: 'true' } : {})}
								/>
								<Radio
									id="sortRating"
									name="sortBy"
									value="vote_average"
									onChange={this.chooseSort}
									labelText="rating"
									{...(this.state.sortValue === 'vote_average' ? { isDefaultChecked: 'true' } : {})}
								/>
							</Col>
							<Col lg={4}>
								<RadioLabel>Order</RadioLabel>
								<Radio
									id="ascOrder"
									name="sortOrder"
									value="asc"
									onChange={this.chooseSortByOrder}
									labelText="asc. order"
									{...(this.state.sortByOrderValue === 'asc' ? { isDefaultChecked: 'true' } : {})}
								/>
								<Radio
									id="descOrder"
									name="sortOrder"
									value="desc"
									onChange={this.chooseSortByOrder}
									labelText="desc. order"
									{...(this.state.sortByOrderValue === 'desc' ? { isDefaultChecked: 'true' } : {})}
								/>
							</Col>
						</Row>
					</Form.Group>
				</Form>
				{
					this.state.searchPerformed && movies && movies.length ? (
						<React.Fragment>
							<Results>
								{movies.length}
								{' '}
								movies found
							</Results>
							<FilmsList movies={movies} />
						</React.Fragment>
					) : (
						<EmptyList />
					)
				}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	movies: state.movies
});

const mapDispatchToProps = {
	getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
