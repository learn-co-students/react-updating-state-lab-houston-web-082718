// Code DigitalClicker Component Here
import React, { Component } from "react";

export default class DigitalClicker extends Component {
  state = { timesClicked: 0 };

  clickCount = () => {
    const count = this.state.timesClicked + 1;
    return this.setState({ timesClicked: count });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickCount}>{this.state.timesClicked}</button>
      </div>
    );
  }
}
