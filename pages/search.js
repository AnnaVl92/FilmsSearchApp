import React from 'react';
import Search from '../src/components/search/search.jsx';
import css from '../src/components/app/app.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getMovies } from '../src/redux/actions';
import fetch from 'isomorphic-fetch';

const SearchPage = () => {
    return <Search />;
};

SearchPage.getInitialProps = async ({ store, query }) => {
    store.dispatch(getMovies(query))
};

export default SearchPage;