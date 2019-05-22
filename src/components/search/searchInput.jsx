import React from 'react';

function SearchInput(props) {
	return (
		<label>
			Find Your Movie
			<input type="text" name="name" value={props.value} onChange={props.onChange} className="form-control" />
		</label>
	);
}

export default SearchInput;
