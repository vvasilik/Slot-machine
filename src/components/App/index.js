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
    constructor(props) {
        super(props);
        this.state = {
            intervalId: null,
            isPrizeVisible: false,
            iteration: 0,
            cards: []
        }
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
        clearInterval(this.state.intervalId);
        this.setState({
            isPrizeVisible: true,
            intervalId: null
        });
    }

    componentDidMount() {
        const timeoutId = setTimeout(() => {
            this.initTimer();
        }, delayAutoStart);
        this.setState({timeoutId: timeoutId});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
        clearTimeout(this.state.timeoutId);
    }

    initTimer() {
        clearTimeout(this.state.timeoutId);
        const intervalId = setInterval(() => {
            this.setState({iteration: ++this.state.iteration});
        }, tick);
        const timeoutId = setTimeout(() => {
            this.stop();
        }, delayAutoStop);
        this.setState({
            intervalId: intervalId,
            timeoutId: timeoutId,
            isPrizeVisible: false
        });
    }

    setNewCard = (card, index) => {
        const updatedCards = this.state.cards;

        updatedCards[index] = card;
        this.setState({cards: updatedCards});
    }

    render() {
        const controlsMethods = {startClickHandler: this.startClickHandler, stopClickHandler: this.stopClickHandler};

        return <div>
            <Controls methods={controlsMethods} />
            <Slots setNewCard={this.setNewCard} iteration={this.state.iteration} slotsNumber={slotsNumber} />
            {this.state.isPrizeVisible ? <Prize cards={this.state.cards}/> : null}
        </div>
    }
}