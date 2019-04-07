import React from 'react';
import NoFilmsFound from './noFilmsFound.jsx';
import {shallow} from 'enzyme';

it('renders correctly', () => {
 	const NoFilmsFound = shallow(
 		<div>No Films Found</div>
 	);
 	expect(NoFilmsFound).toMatchSnapshot(); 
});