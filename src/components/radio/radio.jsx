// @flow
import React from 'react';
import { Form } from 'react-bootstrap';

type RadioProps = {
	id: string,
	value: string,
	name: string,
	onChange: Function,
	isDefaultChecked: string,
	labelText: string
};

function Radio(props: RadioProps) {
	return (
		<Form.Check
			inline
			label={props.labelText}
			id={props.id}
			type="radio"
			value={props.value}
			name={props.name}
			onChange={props.onChange}
			defaultChecked={props.isDefaultChecked}
		/>
	);
}

export default Radio;
