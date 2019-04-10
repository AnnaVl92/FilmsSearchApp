import React from 'react';
import Search from './search.jsx';
import { mount } from "enzyme";
import data from '../../data.json';

describe('Search', function() {
	it('check list of films in search state',() => {
		const wrapper = mount(<Search />);
		expect(wrapper.state().films).toEqual(data.films);
		expect(wrapper.state().filteredFilms).toEqual(data.films);
		expect(wrapper.state().sortedFilms).toEqual(data.films);
		expect(wrapper).toMatchSnapshot();
	});

	it('check searchValue',() => {
		const onChange=jest.fn(),
			wrapper = mount(<Search onChange={onChange} />),
			searchInput = wrapper.find("#searchInput"),
			event = { target: { value: "Kill Bill" } };
		
		searchInput.simulate("change", event);
    	expect(onChange).toBeCalledWith(event);
		expect(wrapper.state().searchValue).toEqual(searchInput.value);
	});
});