import React from 'react';
import Slot from './index';
import Card from '../Card';
import { shallow } from 'enzyme';

it('Should create Slot with Card', () => {
	const slot = shallow(<Slot iteration={0} />);

	expect(slot.find(Card).length).toBe(1);
})

it('Should run setNewCard on first iteration', () => {
	const mockProps = {
		setNewCard: jest.fn(),
		iteration: 1
	};
	const slot = shallow(<Slot {...mockProps} />);

	expect(mockProps.setNewCard).toBeCalled();
})

it('Should not run setNewCard on first iteration', () => {
	const mockProps = {
		setNewCard: jest.fn(),
		iteration: 0
	};
	const slot = shallow(<Slot {...mockProps} />);

	expect(mockProps.setNewCard).not.toBeCalled();
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