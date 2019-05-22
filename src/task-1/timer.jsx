import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
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
Timer:
				{this.state.date.toLocaleTimeString()}
			</div>
		);
	}
}

ReactDOM.render(
	<Timer />,
	document.getElementById('timer')
);
