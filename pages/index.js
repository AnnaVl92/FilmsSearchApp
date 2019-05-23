import React from 'react';
import {Provider} from 'react-redux';
import { connect } from 'react-redux';
import css from '../src/components/app/app.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from '../src/redux/store/store.js';
import App from '../src/components/app/app.jsx';

class Index extends React.Component {
	static async getInitialProps({ store }) {
		return { };
	}

	render() {
		return <App />;
	}
}

export default connect(state => state)(Index);
