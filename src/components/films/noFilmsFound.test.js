import React from 'react';
import NoFilmsFound from './noFilmsFound.jsx';
import { shallow } from "enzyme";

itx('renders correctly', () => {
 	const component = shallow(<NoFilmsFound />);
 	expect(component.contains(<div>No Films Found</div>));
 	expect(component).toMatchSnapshot();
});