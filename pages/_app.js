import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store/store.js';
import configureStore from '../src/redux/store/store.js';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
import reducer from '../src/redux/reducers';
import ErrorBoundary from '../src/components/error/errorBoundary.jsx';

const makeStore = initialState => createStore(reducer, initialState);

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<Container>
				<Provider store={store}>
					<ErrorBoundary>
						<Component {...pageProps} />
					</ErrorBoundary>
				</Provider>
			</Container>
		);
	}
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
