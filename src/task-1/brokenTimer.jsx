import React from 'react';
import ReactDOM from 'react-dom';

class BrokenTimer extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerId = setInterval(
			() => this.updateTime(), 900
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	updateTime() {
		this.setState((prevState) => {
		  prevState.date = new Date();
		  return prevState;
		});
	}

	render() {
		return (
			<div>
Broken Timer:
				{this.state.date.toLocaleTimeString()}
			</div>
		);
	}
}

ReactDOM.render(
	<BrokenTimer />,
	document.getElementById('brokenTimer')
);
