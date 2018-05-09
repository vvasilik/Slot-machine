import React, { Component, PropTypes } from 'react';
import Slot from '../Slot';

export default class Slots extends Component {
    render() {
        const slotsList = [];

        for (let i=0; i < this.props.slotsNumber; i++) {
            slotsList.push(<Slot setNewCard={this.props.setNewCard} iteration={this.props.iteration} index={i} key={i} />)
        }

        return <ul>
            {slotsList}
        </ul>
    }
}