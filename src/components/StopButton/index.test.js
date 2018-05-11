import React from 'react';
import StopButton from './index';
import { shallow } from 'enzyme';

it('Should run start function on click', () => {
	const mockProps = {
		stop: jest.fn()
	};
	const button = shallow(<StopButton {...mockProps} />);

	button.simulate('click');
	expect(mockProps.stop).toBeCalled();
})