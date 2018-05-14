import React from 'react';
import Slot from './index';
import Card from '../Card';
import { shallow } from 'enzyme';

it.skip('Should create Slot with Card', () => {
	const slot = shallow(<Slot />);
	expect(slot.find(Card).length).toBe(1);
})

it.skip('Should run setNewCard', () => {
	const mockProps = {
		setNewCard: jest.fn(),
		iteration: 0
	};
	const slot = shallow(<Slot {...mockProps} />);

	slot.setState({
		iteration: 1
	})

	expect(mockProps.setNewCard).toBeCalled();
})

it('Should not run setNewCard', () => {
	const mockProps = {
		setNewCard: jest.fn(),
		iteration: 0
	};
	const slot = shallow(<Slot {...mockProps} />);

	slot.setState({
		iteration: 0
	})

	expect(mockProps.setNewCard).not.toBeCalled();
})