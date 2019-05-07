import React from 'react';
import EmptyList from './emptyList.jsx';
import { shallow } from "enzyme";

itx('renders correctly', () => {
 	const component = shallow(<EmptyList />);
 	expect(component.contains(<div>Start searching films</div>));
 	expect(component).toMatchSnapshot();
});
