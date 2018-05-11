import React from 'react';
import './style.css';

export default props => {
    return <div className="card">
        {
			props.currentCard
				? <img className="card__img" src={props.currentCard.img} />
				: null
		}
    </div>
}