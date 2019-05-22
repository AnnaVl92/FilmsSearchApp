import React from 'react';
import { shallow } from 'enzyme';
import EmptyList from './emptyList.jsx';
import expect from 'expect';

// eslint-disable-next-line no-undef
itx('renders correctly', () => {
	const component = shallow(<EmptyList />);
	expect(component.contains(<div>Start searching films</div>));
	expect(component).toMatchSnapshot();
});
