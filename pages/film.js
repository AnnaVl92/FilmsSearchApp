import React from 'react';
import FilmPage from '../src/components/filmPage/filmPage.jsx';
import { connect } from 'react-redux';
import { getMovieById, getMoviesBySimilarGenre } from '../src/redux/actions';
import fetch from 'isomorphic-fetch';
import css from '../src/components/app/app.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Film = () => {
    return <FilmPage />;
};

Film.getInitialProps = async ({ store, query }) => {
    const { id } = query;
    const res = await fetch(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
    const data = await res.json();
    store.dispatch(getMovieById(id));
    store.dispatch(getMoviesBySimilarGenre(data.genres[0]));
};

export default connect(state => state)(Film);
