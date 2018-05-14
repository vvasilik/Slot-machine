import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Card = props => {
    return <div className="card">
        {
			props.currentCard
				? <img className="card__img" src={props.currentCard.img} />
				: null
		}
    </div>
}

Card.propTypes = {
	currentCard: PropTypes.objectOf(PropTypes.string)
}

export default Card;