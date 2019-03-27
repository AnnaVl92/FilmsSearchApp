import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<label>
						Find Your Movie
						<input type="text" className="form-control" />
					</label>
				</div>
				<div className="form-group">
					SEARCH BY
					<button className="btn btn-primary">TITLE</button>
					<button className="btn btn-info">GENRE</button>
				</div>
				<button type="submit" className="btn btn-primary">Search</button>
				<div className="search-results">7 movies found</div>
			</form>
		);
	}
}

ReactDOM.render(	
	<Search />,
	document.getElementById('search')
);