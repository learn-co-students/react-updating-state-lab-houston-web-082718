// Code DigitalClicker Component Here
import React from "react";

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  };

  clicked = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  render() {
    return <button onClick={this.clicked}>{this.state.timesClicked}</button>;
  }
}

export default DigitalClicker;
