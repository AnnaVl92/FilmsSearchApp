import React from 'react';
import { mount } from 'enzyme';
import Film from './film.jsx';
import expect from 'expect';

// eslint-disable-next-line no-undef
itx('renders correctly', () => {
	const mockFilm = {
		img: 'https://vignette.wikia.nocookie.net/cinemorgue/images/9/98/Kill_bill2_01.jpg/revision/latest?cb=20151221212736',
		title: 'Kill Bill: Volume 2',
		releaseDate: 2004,
		genre: 'Action & Adventure'
	};
	const component = mount(<Film film={mockFilm} />);
	expect(component).toMatchSnapshot();
});
