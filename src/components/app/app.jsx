import React, { Suspense, lazy } from 'react';
import css from './app.css';
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { StaticRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Router as NextRouter } from 'next/router';
import Search from '../search/search.jsx';
import FilmPage from '../filmPage/filmPage.jsx';
import Page404 from '../page404/page404.jsx';

const SearchLazy = lazy(() => import('../search/search.jsx'));
const FilmPageLazy = lazy(() => import('../filmPage/filmPage.jsx'));
const Page404Lazy = lazy(() => import('../page404/page404.jsx'));

const isServer = !process.browser;

class App extends React.Component {
	render() {
		if (isServer) {
			return (
				<StaticRouter>
					<Switch>
						<Route exact path="/" component={Search} />
						<Route path="/search/:query" component={Search} />
						<Route path="/film/:id" component={FilmPage} />
						<Route component={Page404} />
					</Switch>
				</StaticRouter>
			)
		} else {
			return (
				<BrowserRouter>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path="/" component={SearchLazy} />
							<Route path="/search" component={SearchLazy} />
							<Route path="/film/:id" component={FilmPageLazy} />
							<Route component={Page404Lazy} />
						</Switch>
					</Suspense>
				</BrowserRouter>
			)
		}
	}
};

export default App;