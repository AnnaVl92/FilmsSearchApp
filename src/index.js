import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/app/app.jsx';
import { persistor, store } from './redux/store/store.js';
// import store from './redux/store/store.js';
import ErrorBoundary from './components/error/errorBoundary.jsx';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
