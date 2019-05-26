// @flow
import React from 'react';
import { Form } from 'react-bootstrap';

type SearchInputProps = {
	value: string,
	onChange: Function
};

function SearchInput(props: SearchInputProps) {
	return (
		<React.Fragment>
			<Form.Label srOnly htmlFor="searchFilmInput"></Form.Label>
			<Form.Control id="searchFilmInput" type="text" name="name" value={props.value} onChange={props.onChange} />
		</React.Fragment>
	);
}

export default SearchInput;
