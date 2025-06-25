import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Footer />', () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it('renders without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toEqual(true);
	});

	it('renders copyright text', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.find('div.footer p').text()).toMatch(/Copyright/);
	});

	it('does not render contact link when user is null', () => {
		const wrapper = shallow(<Footer user={null} />);
		expect(wrapper.find('div.footer a')).toHaveLength(0);
	});

	it('renders contact link when user is provided', () => {
		const wrapper = shallow(
			<Footer user={{ email: 'larry@hudson.com', password: '123456' }} />
		);
		expect(wrapper.find('div.footer a')).toHaveLength(1);
		expect(wrapper.find('div.footer a').text()).toBe('Contact us');
	});
});
