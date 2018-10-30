// Code YouTubeDebugger Component Here

import React, { Component } from "react";

class YouTubeDebugger extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  toTen = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  toSeven = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.toTen}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.toSeven}>
          Change resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
