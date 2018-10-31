import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    };

    incrementTimesClicked = () => {
        let newClickCount = this.state.timesClicked + 1;

        this.setState({
            timesClicked: newClickCount
        });
    }

    render() {
        return (
            <button onClick={this.incrementTimesClicked}>{this.state.timesClicked}</button>
        )
    }
}