import React from 'react';
import Page404 from '../src/components/page404/page404.jsx';

export default class Error extends React.Component {
	static getInitialProps({ res, xhr }) {
		const statusCode = res ? res.statusCode : (xhr ? xhr.status : null);
		return { statusCode };
	}

	render() {
		return <Page404 />;
	}
}
