import React from 'react';
import Search from '../src/components/search/search.jsx';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getMovies } from '../src/redux/actions';

const SearchPage = () => <Search />;

SearchPage.getInitialProps = async ({ store, query }) => {
	store.dispatch(getMovies(query));
};

export default SearchPage;
