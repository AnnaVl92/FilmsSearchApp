import React from 'react';
import Search from './search.jsx';
import SearchInput from './searchInput.jsx';
import SearchButton from './searchButton.jsx';
import { shallow, mount } from "enzyme";
import data from '../../data.json';

describe('Search', function() {
	it('check list of films in search state',() => {
		const wrapper = mount(<Search />);
		expect(wrapper.state().films).toEqual(data.films);
		expect(wrapper.state().filteredFilms).toEqual(data.films);
		expect(wrapper.state().filteredFilms.length).toEqual(data.films.length);
		expect(wrapper.state().sortedFilms).toEqual(data.films);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('Search Form', () => {
	const mockSubmit = jest.fn(),
		props = {
			applySort: mockSubmit
		},
		fakeEvent = { preventDefault: () => console.log('preventDefault') },
		component = shallow(<Search {...props} />),
		button = shallow(<SearchButton />);

	it('find form', () => {
		expect(component.find("form").length).toBe(1);
	});

	beforeEach(() => {
		component.find('form').simulate('submit', fakeEvent);
	});

	it('check submit', () => {
		expect(mockSubmit).toHaveBeenCalledTimes(1);
	});

	// it('check click', () => {
	// 	button.simulate('click', {
	// 		preventDefault: () => {}, 
	// 	})
	// 	expect(mockSubmit).toHaveBeenCalledTimes(1);
	// });
});