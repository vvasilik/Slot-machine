import React, { Component, PropTypes } from 'react';

export default props => {
    return <div>{props.currentCard ? props.currentCard.title : ''}</div>
}