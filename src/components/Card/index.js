import React, { Component, PropTypes } from 'react';
import './style.css';

export default props => {
    return <div className="card">
        <img className="card__img" src={props.currentCard ? props.currentCard.img : ''} />
    </div>
}