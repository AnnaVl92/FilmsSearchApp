import React from 'react';
import ReactDOM from 'react-dom';
import css from './app.css';
import Search from './components/search/search.jsx';
import FilmPage from './components/filmPage/filmPage.jsx';
import ErrorBoundary from './components/error/errorBoundary.jsx';

class App extends React.Component {
	render(){
		return (
			<ErrorBoundary>
				<Search />
			</ErrorBoundary>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));