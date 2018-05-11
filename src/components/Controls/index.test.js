import React from 'react';
import Controls from './index';
import StartButton from '../StartButton';
import StopButton from '../StopButton';
import { shallow } from 'enzyme';

it('Should create Controls with StartButton', () => {
	const mockProps = {
		methods: {
			startClickHandler: jest.fn(),
			stopClickHandler: jest.fn()
		}
	}
	const controls = shallow(<Controls {...mockProps} />);
	expect(controls.find(StartButton).length).toBe(1);
})

it('Should create Controls with StopButton', () => {
	const mockProps = {
		methods: {
			startClickHandler: jest.fn(),
			stopClickHandler: jest.fn()
		}
	}
	const controls = shallow(<Controls {...mockProps} />);
	expect(controls.find(StopButton).length).toBe(1);
})