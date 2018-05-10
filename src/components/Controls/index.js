import React from 'react';
import StartButton from '../StartButton';
import StopButton from '../StopButton';

export default props => {
    return <div>
        <StartButton start={props.methods.startClickHandler} />
        <StopButton stop={props.methods.stopClickHandler} />
    </div>
}