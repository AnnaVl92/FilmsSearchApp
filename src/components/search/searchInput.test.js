import React from 'react';
import SearchInput from './searchInput.jsx';
import SearchButton from './searchButton.jsx';
import { shallow, mount } from "enzyme";

describe('SearchInput', function() {
	it('check onChange',() => {
		const onChange = jest.fn(),
			props= {
				value: "Kill Bill",
				onChange
			},
			wrapper = shallow(<SearchInput {...props} />);
		wrapper.find("input").simulate("change", "Kill Bill");
		expect(onChange).toHaveBeenCalledWith("Kill Bill");
	});
});