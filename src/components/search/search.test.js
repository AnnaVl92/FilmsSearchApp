import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './search.jsx';
import data from '../../data.json';

describe('Search', () => {
	itx('check list of films in search state', () => {
		const wrapper = mount(<Search />);
		expect(wrapper.state().films).toEqual(data.films);
		expect(wrapper.state().filteredFilms).toEqual(data.films);
		expect(wrapper.state().filteredFilms.length).toEqual(data.films.length);
		expect(wrapper.state().sortedFilms).toEqual(data.films);
		expect(wrapper).toMatchSnapshot();
	});
});

// eslint-disable-next-line no-undef
describe('Search submit', () => {
	// eslint-disable-next-line no-undef
	const mockSubmit = jest.fn();
	const props = {
		handleSubmit: mockSubmit
	};
	const fakeEvent = { preventDefault: () => console.log('preventDefault') };
	const component = shallow(<Search {...props} />);

	// eslint-disable-next-line no-undef
	itx('find form', () => {
		expect(component.find('form').length).toBe(1);
	});

	// eslint-disable-next-line no-undef
	itx('check submit', (done) => {
		component.find('form').simulate('submit', fakeEvent);
		setTimeout(() => {
			expect(component.state('submitHandled')).toBe(true);
			done();
		}, 100);
	}, 1000);
});
