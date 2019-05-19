import React from 'react';
import {createStore} from "redux";
import {Provider} from 'react-redux';
// import App from '../src/components/app/app.jsx';
import { persistor, store, configureStore1 } from '../src/redux/store/store.js';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
// import { StyledApp } from '../src/components/app/app.css';
import reducer from '../src/redux/reducers';
import ErrorBoundary from '../src/components/error/errorBoundary.jsx';

const makeStore = (initialState, options) => {
  console.log('makeStore')
  console.log(initialState)
  return createStore(reducer, initialState);
};

class MyApp extends App {
	static async getInitialProps({Component, ctx}) {
    console.log('MyApp')
    console.trace();
    let pageProps = {}
 
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    
    return {pageProps}
  }
 
  render() {
    const {Component, pageProps, store} = this.props
    return (
      <Container>
        <Provider store={store}>
					<ErrorBoundary>
          	<Component {...pageProps} />
					</ErrorBoundary>
        </Provider>
      </Container>
    )
  }
}
 
export default withRedux(configureStore1)(withReduxSaga(MyApp));
