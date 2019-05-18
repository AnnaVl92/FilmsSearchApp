import React from 'react';
import {Provider} from 'react-redux';
import { connect } from 'react-redux';
// import { persistor, store } from '../src/redux/store/store.js';
// import { PersistGate } from 'redux-persist/integration/react';
import css from '../src/components/app/app.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from '../src/redux/store/store.js';
import ErrorBoundary from '../src/components/error/errorBoundary.jsx';
import Search from '../src/components/search/search.jsx';

import Page404 from '../src/components/page404/page404.jsx';
import FilmList from '../src/components/films/filmsList.jsx';
import Film from '../src/components/films/film.jsx';

class Index extends React.Component {
	static getInitialProps({store}) {
		return { }
	  }
	 
	  render() {
		return <Search />
	  }
};

export default connect(state => state)(Index);