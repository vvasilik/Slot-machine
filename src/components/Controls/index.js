import React from 'react';
import PropTypes from 'prop-types';
import StartButton from '../StartButton';
import StopButton from '../StopButton';

const Controls = props => {
    return <div>
        <StartButton start={props.methods.startClickHandler} />
        <StopButton stop={props.methods.stopClickHandler} />
    </div>
}

Controls.propTypes = {
	methods: PropTypes.objectOf(PropTypes.func)
}

export default Controls;