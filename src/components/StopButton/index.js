import React from 'react';
import PropTypes from 'prop-types';

const StopButton = props => {
    return <button onClick={props.stop}>StopButton</button>
}

export default StopButton;

StopButton.propTypes = {
	stop: PropTypes.func
}