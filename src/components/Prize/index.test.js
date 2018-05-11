import React from 'react';
import Prize from './index';
import { shallow } from 'enzyme';

it('Should return 100$ win', () => {
	const mockProps = {
		cards: [
			{
				type: 'one'
			},
			{
				type: 'one'
			},
			{
				type: 'one'
			}
		]
	};
	const prize = shallow(<Prize {...mockProps} />);
	expect(prize.contains(<p>You win 100$</p>)).toBe(true);
})

it('Should return 20$ win', () => {
	const mockProps = {
		cards: [
			{
				type: 'one'
			},
			{
				type: 'one'
			},
			{
				type: 'two'
			}
		]
	};
	const prize = shallow(<Prize {...mockProps} />);
	expect(prize.contains(<p>You win 20$</p>)).toBe(true);
})

it('Should return 10$ win', () => {
	const mockProps = {
		cards: [
			{
				type: 'one'
			},
			{
				type: 'two'
			},
			{
				type: 'one'
			}
		]
	};
	const prize = shallow(<Prize {...mockProps} />);
	expect(prize.contains(<p>You win 10$</p>)).toBe(true);
})

it('Should return 0$ win', () => {
	const mockProps = {
		cards: [
			{
				type: 'one'
			},
			{
				type: 'two'
			},
			{
				type: 'three'
			}
		]
	};
	const prize = shallow(<Prize {...mockProps} />);
	expect(prize.contains(<p>You win 0$</p>)).toBe(true);
})