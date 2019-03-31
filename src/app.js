import React from 'react';
import ReactDOM from 'react-dom';
import css from './app.css';
import Search from './search/search.jsx';
// import FilmPage from './filmPage/filmPage.jsx';
import ErrorBoundary from './error/errorBoundary.jsx';

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