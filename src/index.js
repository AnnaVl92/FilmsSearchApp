import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';
import { persistor, store } from './redux/store/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from './components/error/errorBoundary.jsx';

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root')
);