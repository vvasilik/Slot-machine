import React from 'react';
import PropTypes from 'prop-types';

const StartButton = props => {
    return <button onClick={props.start}>StartButton</button>
}

export default StartButton;

StartButton.propTypes = {
	start: PropTypes.func
}