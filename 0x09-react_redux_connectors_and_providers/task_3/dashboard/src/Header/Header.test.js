import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

const USER = { email: 'larry@hudson.com', password: '123456' };

describe('<Header />', () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toEqual(true);
	});

	it('renders an image', () => {
		const wrapper = shallow(<Header user={USER} />);
		expect(wrapper.find('img')).toHaveLength(1);
	});

	it('renders a header title', () => {
		const wrapper = shallow(<Header user={USER} />);
		expect(wrapper.find('h1')).toHaveLength(1);
	});

	it('does not display logout section when user is not logged in', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('#logoutSection')).toHaveLength(0);
	});

	it('displays logout section when user is logged in', () => {
		const wrapper = shallow(<Header user={USER} />);
		expect(wrapper.find('#logoutSection')).toHaveLength(1);
	});
});
