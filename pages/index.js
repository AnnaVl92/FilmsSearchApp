import React from 'react';
import {Provider} from 'react-redux';
import App from '../src/components/app/app.jsx';
import { persistor, store } from '../src/redux/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from '../src/components/error/errorBoundary.jsx';
import fetch from 'isomorphic-fetch';

function Index(props) {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</ErrorBoundary>
		</Provider>
	)
};

Index.getInitialProps = async function() {
	const res = await fetch('https://reactjs-cdp.herokuapp.com/movies');
	const data = await res.json();

	console.log(res);
}

export default Index;