import React from 'react';
import Card from './index';
import { shallow } from 'enzyme';

it('Should create Card with image', () => {
	const mockProps = {
		currentCard: {
			img: 'URL'
		}
	};
	const card = shallow(<Card {...mockProps} />);
	expect(card.find('img').length).toBe(1);
})

it('Should not create Card with image', () => {
	const card = shallow(<Card />);
	expect(card.find('img').length).toBe(0);
})