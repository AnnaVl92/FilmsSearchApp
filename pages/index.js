import React from 'react';
import { connect } from 'react-redux';
import App from '../src/components/app/app.jsx';

class Index extends React.Component {
	static async getInitialProps() {
		return { };
	}

	render() {
		return <App />;
	}
}

export default connect(state => state)(Index);
