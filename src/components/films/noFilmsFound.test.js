import React from 'react';
import NoFilmsFound from './noFilmsFound.jsx';
import {render} from 'enzyme';

it('renders correctly', () => {
 	const NoFilmsFound = render(
 		<div>No Films Found</div>
 	);
 	expect(NoFilmsFound).toMatchSnapshot(); 
});