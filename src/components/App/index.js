import React, { Component } from 'react';
import Controls from '../Controls';
import Slots from '../Slots';
import Prize from '../Prize';
import './style.css';

const delayAutoStart = 5000;
const delayAutoStop = 10000;
const tick = 50;
const slotsNumber = 3;


export default class App extends Component {
    state = {
		intervalId: null,
		timeoutId: null,
		isPrizeVisible: false,
		iteration: 0,
		cards: []
	}

    startClickHandler = () => {
        if (!this.state.intervalId) {
            this.initTimer();
        }
    }

    stopClickHandler = () => {
        this.stop();
    }

    stop() {
		if (this.state.iteration !== 0) {
			clearInterval(this.state.intervalId);
			this.setState({
				isPrizeVisible: true,
				intervalId: null
			});	
		}
    }

    componentDidMount() {
        const timeoutId = setTimeout(this.initTimer.bind(this), delayAutoStart);
        this.setState({timeoutId: timeoutId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
        clearTimeout(this.state.timeoutId);
    }

    initTimer() {
        clearTimeout(this.state.timeoutId);
        const intervalId = setInterval(this.increaseIteration.bind(this), tick);
        const timeoutId = setTimeout(this.stop.bind(this), delayAutoStop);
        this.setState({
            intervalId: intervalId,
            timeoutId: timeoutId,
            isPrizeVisible: false
        });
	}
	
	increaseIteration() {
		this.setState({iteration: ++this.state.iteration});
	}

    setNewCard = (card, index) => {
        const cards = this.state.cards;

        cards[index] = card;
        this.setState({cards: cards});
    }

    render() {
        const controlsMethods = {
			startClickHandler: this.startClickHandler,
			stopClickHandler: this.stopClickHandler
		};

        return <div>
            <Controls methods={controlsMethods} />
            <Slots setNewCard={this.setNewCard} iteration={this.state.iteration} slotsNumber={slotsNumber} />
            {this.state.isPrizeVisible ? <Prize cards={this.state.cards}/> : null}
        </div>
    }
}