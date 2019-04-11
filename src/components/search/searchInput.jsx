import React from 'react';

function SearchInput (props) {
	console.log(props);
	return (
		<label>
			Find Your Movie
			<input type="text" value={props.value} onChange={props.onChange} className="form-control" />
		</label>
	);
};

export default SearchInput;