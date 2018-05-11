import React from 'react';
import StartButton from './index';
import { shallow } from 'enzyme';

test('StartButton', () => {
	const mockProps = {
		start: jest.fn()
	};
	const button = shallow(<StartButton {...mockProps} />);

	button.simulate('click');
	expect(mockProps.start).toBeCalled()
});