import React from 'react';
import { shallow } from 'enzyme';
import SearchInput from './searchInput.jsx';

describe('SearchInput', () => {
	itx('check onChange', () => {
		const onChange = jest.fn();
		const props = {
			value: 'Kill Bill',
			onChange
		};
		const wrapper = shallow(<SearchInput {...props} />);
		wrapper.find('input').simulate('change', 'Kill Bill');
		expect(onChange).toHaveBeenCalledWith('Kill Bill');
	});
});
