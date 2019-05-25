// @flow
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

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
		<div className="form-check">
			<input className="form-check-input" id={props.id} type="radio" value={props.value} name={props.name} onChange={props.onChange} defaultChecked={props.isDefaultChecked} />
			<label className="form-check-label" htmlFor={props.id}>
				{props.labelText}
			</label>
		</div>
	);
}

export default Radio;
