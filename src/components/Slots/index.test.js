import React from 'react';
import Slots from './index';
import Slot from '../Slot';
import { shallow } from 'enzyme';

it('Should create 3 Slot components', () => {
	const slots = shallow(<Slots slotsNumber={3} />);
    expect(slots.find(Slot).length).toBe(3);
})

it('Should not create any Slot components', () => {
	const slots = shallow(<Slots slotsNumber={null} />);
    expect(slots.find(Slot).length).toBe(0);
})