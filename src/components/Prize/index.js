import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slot from '../Slot';

export default class Prize extends Component {
    render() {
        const first = this.props.cards[0].type;
        const second = this.props.cards[1].type;
        const third = this.props.cards[2].type;
        let prize = 0;

        if (first === second && second === third) {
            prize = 100;
        } else if (first === third) {
            prize = 10;
        } else if (first === second || second === third) {
            prize = 20;
        }

        return <p>You win {prize}$</p>
    }
}

Prize.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}