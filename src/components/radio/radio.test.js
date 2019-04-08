import React from 'react';
import Radio from './radio.jsx';
import { mount } from "enzyme";
import toJson from "enzyme-to-json";

describe('Radio', function() {
	it('test chooseSort', () => {
		const onChange = jest.fn(),
			props = {
				value: "releaseDate",
				onChange
			},
			component = mount(<Radio {...props} />).find("input");
		component.simulate("change");
		expect(onChange).toHaveBeenCalledWith("releaseDate");
	});
});