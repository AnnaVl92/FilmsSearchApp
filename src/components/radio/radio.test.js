import React from 'react';
import { shallow, mount } from 'enzyme';
import Radio from './radio.jsx';

describe('Radio', () => {
	itx('check if radio component render properly', () => {
		const wrapper = shallow(<Radio id="sortReleaseDate" name="sort" value="releaseDate" labelText="release date" />);
		expect(wrapper).toMatchSnapshot();
	});

	itx('test chooseSort with releaseDate value', () => {
		const onChange = jest.fn();
		const component = shallow(<Radio onChange={onChange} />);
		component.find('input').simulate('change', 'releaseDate');
		expect(onChange).toBeCalledWith('releaseDate');
	});

	itx('test chooseSort with rating value', () => {
		const onChange = jest.fn();
		const component = shallow(<Radio onChange={onChange} />);
		component.find('input').simulate('change', 'rating');
		expect(onChange).toBeCalledWith('rating');
	});

	itx('test changeSearchFilter with genre value', () => {
		const onChange = jest.fn();
		const component = shallow(<Radio onChange={onChange} />);
		component.find('input').simulate('change', 'genre');
		expect(onChange).toBeCalledWith('genre');
	});

	itx('test changeSearchFilter with title value', () => {
		const onChange = jest.fn();
		const component = shallow(<Radio onChange={onChange} />);
		component.find('input').simulate('change', 'title');
		expect(onChange).toBeCalledWith('title');
	});
});
