import React from 'react';
import css from './app.css';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from '../search/search.jsx';
import FilmPage from '../filmPage/filmPage.jsx';
import Page404 from '../page404/page404.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {Router, Route, Switch} from 'react-router-dom';
// import { createMemoryHistory } from 'history';

// const history = createMemoryHistory();

class App extends React.Component {
	render(){
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Search}/>
					<Route exact path="/search/:query" component={Search}/>
					<Route path="/film/:id" component={FilmPage}/>
					<Route component={Page404} />
				</Switch>
			</Router>
		)
	}
};

export default App;