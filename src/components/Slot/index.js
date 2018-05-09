import React, { Component, PropTypes } from 'react';
import Card from '../Card';
import { log } from 'util';

const cards = [
    {
        type: 'strawberry',
        title: 'S'
    },
    {
        type: 'banana',
        title: 'B'
    },
    {
        type: 'orange',
        title: 'O'
    },
    {
        type: 'monke',
        title: 'M'
    }
];

export default class Slot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: null,
            iteration: 0
        }
    }

    componentDidMount() {
        this.setState({
            currentCard: this.getCurrentCard()
        })
    }

    componentWillReceiveProps() {
        if (this.state.iteration !== this.props.iteration) {
            const card = this.getCurrentCard();
            this.setState({
                currentCard: card,
                iteration: this.props.iteration
            })
            this.props.setNewCard(card, this.props.index);
        }
    }

    getCurrentCard() {
        return cards[Math.floor(Math.random() * (cards.length - 0))];
    }

    render() {
        return <li>
            <Card currentCard={this.state.currentCard}/>
        </li>
    }
}