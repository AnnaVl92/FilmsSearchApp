import React from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			errorInfo: null
		};
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo
		});
	}

	render() {
		if (this.state.errorInfo) {
    	return (
    		<React.Fragment>
    			<div>{this.state.error && this.state.error.toString()}</div>
    			<div>{this.state.errorInfo.componentStack}</div>
    		</React.Fragment>
    	)
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;