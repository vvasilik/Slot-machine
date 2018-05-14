import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import { log } from 'util';
import './style.css';

const cards = [
    {
        type: 'strawberry',
        img: './src/images/strawberry.jpg'
    },
    {
        type: 'banana',
        img: './src/images/banana.jpg'
    },
    {
        type: 'orange',
        img: './src/images/orange.jpg'
    },
    {
        type: 'monkey',
        img: './src/images/monkey.jpg'
    }
];

export default class Slot extends Component {
    state = {
		currentCard: cards[Math.floor(Math.random() * cards.length)],
		iteration: 0
	}

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.iteration !== prevState.iteration) {
			const card = cards[Math.floor(Math.random() * cards.length)];
			
			nextProps.setNewCard(card, nextProps.index);

			return {
                currentCard: card,
                iteration: nextProps.iteration
            }
		}
		
		return null;
    }

    render() {
        return <li className="slot">
            <Card currentCard={this.state.currentCard}/>
        </li>
    }
}

Slot.propTypes = {
	iteration: PropTypes.number
}