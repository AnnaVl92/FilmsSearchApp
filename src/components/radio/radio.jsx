import React from 'react';

function Radio (props) {
	return (
		<div className="form-check">
			<input className="form-check-input" id={props.radioId} type="radio" value={props.value} name={props.name} onChange={props.onChange} defaultChecked={props.isDefaultChecked} />
			<label className="form-check-label" htmlFor={props.radioId}>
				{props.labelText}
			</label>
		</div>
	);
};

export default Radio;