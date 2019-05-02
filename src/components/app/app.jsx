import React from 'react';
import css from './app.css';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from '../search/search.jsx';
import FilmPage from '../filmPage/filmPage.jsx';
import ErrorBoundary from '../error/errorBoundary.jsx';
import NoFilmsFound from  '../films/noFilmsFound.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// const Main = () => {
// 	return (
// 		<Switch>
// 			<Route exact path="/" component={Search}/>
// 			<Route component={NoFilmsFound}/>
// 		</Switch>
// 	)
// };

/*<Route path="/film/:id" component={FilmPage}/>*/

class App extends React.Component {
	render(){
		return (
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route exact path="/" component={Search}/>
						<Route path="/film/:id" component={FilmPage}/>
					</Switch>
				</Router>
			</ErrorBoundary>
		)
	}
};

export default App;