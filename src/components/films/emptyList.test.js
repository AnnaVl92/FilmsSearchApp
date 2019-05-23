import React from 'react';
import { shallow } from 'enzyme';
import EmptyList from './emptyList.jsx';

itx('renders correctly', () => {
	const component = shallow(<EmptyList />);
	expect(component.contains(<div>Start searching films</div>));
	expect(component).toMatchSnapshot();
});
