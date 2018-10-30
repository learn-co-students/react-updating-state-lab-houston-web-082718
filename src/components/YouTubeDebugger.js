// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: "1080p" } }
    };
  }

  handleBitrateClick() {
    let settings = { ...this.state.settings };
    settings.bitrate = 12;
    this.setState({ settings });
  }

  handleResolutionClick = () => {
    let settings = { ...this.state.settings };
    settings.video.resolution = "720p";
    this.setState({ settings });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleBitrateClick.bind(this)}
          className="bitrate"
        />
        <button className="resolution" onClick={this.handleResolutionClick} />
      </div>
    );
  }
}

export default YouTubeDebugger;
