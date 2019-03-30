import React from 'react';
import ReactDOM from 'react-dom';

class Sort extends React.Component {
	render() {
		return (
			<div className="sort d-flex align-items-center justify-content-end">
				Sort by
				<a href="#" className="btn btn-light">release date</a>
				<a href="#" className="btn btn-danger">rating</a>
			</div>
		);
	}
}

ReactDOM.render(	
	<Sort />,
	document.getElementById('sort')
);