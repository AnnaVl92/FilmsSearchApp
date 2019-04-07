import React from 'react';
import FilmsList from './filmsList.jsx';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";

it('renders correctly', () => {
	const mockFilms = [{
			id: 1,
			img: "https://vignette.wikia.nocookie.net/cinemorgue/images/9/98/Kill_bill2_01.jpg/revision/latest?cb=20151221212736",
			title: "Kill Bill: Volume 2",
			releaseDate: 2004,
			genre: "Action & Adventure"
		},
		{
			id: 2,
			img: "https://vignette.wikia.nocookie.net/immwdb/images/e/e4/Kill-bill-vol-1.jpg/revision/latest?cb=20150116205604",
			title: "Kill Bill: Volume 1",
			releaseDate: 2003,
			genre: "Action & Adventure"
		}]
	;

	const component = shallow(<FilmsList films={mockFilms} />);
	expect(component).toMatchSnapshot();
});