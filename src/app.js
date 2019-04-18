import React from 'react';
import ReactDOM from 'react-dom';
import css from './app.css';
import Search from './components/search/search.jsx';
import FilmPage from './components/filmPage/filmPage.jsx';
import ErrorBoundary from './components/error/errorBoundary.jsx';
import {Provider} from 'react-redux';
import store from './store/store.js';

class App extends React.Component {
	render(){
		return (
			<Provider store={store}>
				<ErrorBoundary>
					<FilmPage />
				</ErrorBoundary>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));