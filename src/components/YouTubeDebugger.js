import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor(props) {
      super(props)
      this.state = {
          errors: [],
          user: null,
          settings: {
              bitrate: 8,
              video: {
                  resolution: '1080p'
              }
          }
      }
  }

  handleBitClick = (event) => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {bitrate: 12,})
      })
  }

  handleResClick = (event) => {
      this.setState({
          settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
      })
  }

  render() {
    return (
        <div><button className="bitrate" onClick={this.handleBitClick}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.handleResClick}>{this.state.settings.video.resolution}</button></div>
    )
  }

}
