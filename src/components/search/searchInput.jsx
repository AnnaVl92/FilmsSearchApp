// @flow
import React from 'react';

type SearchInputProps = {
	value: string,
	onChange: Function
};

function SearchInput(props: SearchInputProps) {
	return (
		// eslint-disable-next-line jsx-a11y/label-has-for
		<label>
			Find Your Movie
			<input type="text" name="name" value={props.value} onChange={props.onChange} className="form-control" />
		</label>
	);
}

export default SearchInput;
