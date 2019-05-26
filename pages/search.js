import React from 'react';
import Search from '../src/components/search/search.jsx';
import { getMovies } from '../src/redux/actions';

const SearchPage = () => <Search />;

SearchPage.getInitialProps = async ({ store, query }) => {
	store.dispatch(getMovies(query));
};

export default SearchPage;
