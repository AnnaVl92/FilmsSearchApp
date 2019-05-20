import React from 'react';
import css from './app.css';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from '../search/search.jsx';
import FilmPage from '../filmPage/filmPage.jsx';
import Page404 from '../page404/page404.jsx';
import {StaticRouter, BrowserRouter, Route, Switch} from 'react-router-dom';
// import {Router, Route, Switch} from 'react-router-dom';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const isServer = !process.browser;
console.log(process.browser);
console.log(123);

class App extends React.Component {
	render(){
		if (isServer) {
			return (
				<StaticRouter history={history}>
					<Switch>
						<Route exact path="/" component={Search}/>
						<Route path="/search/:query" component={Search}/>
						<Route path="/film/:id" component={FilmPage}/>
						<Route component={Page404} />
					</Switch>
				</StaticRouter>
			)
		} else {
			return (
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Search}/>
						<Route path="/search/:query" component={Search}/>
						<Route path="/film/:id" component={FilmPage}/>
						<Route component={Page404} />
					</Switch>
				</BrowserRouter>
			)
		}
	}
};

export default App;