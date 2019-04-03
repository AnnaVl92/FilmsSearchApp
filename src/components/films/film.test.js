import React from 'react';
import Film from './filmsList.jsx';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

it('renders correctly', () => {
	const mockFilm = {
		img:"https://vignette.wikia.nocookie.net/cinemorgue/images/9/98/Kill_bill2_01.jpg/revision/latest?cb=20151221212736",
		title: "Kill Bill: Volume 2",
		releaseDate: 2004,
		genre: "Action & Adventure"
	};

	const component = shallow(<Film film={mockFilm} />);
	expect(component).toMatchSnapshot();
});