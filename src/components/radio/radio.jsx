import React from 'react';

function Radio(props) {
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
