// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
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

  handleChangeBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  };

  handleChangeResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p"
        })
      })
    });

    /*
        Or this can be defined as
        this.setState({
          settings: {
            ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
            }
          },
        });
      */
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleChangeBitrate}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          Change resolution
        </button>
      </div>
    );
  }
}

// export default class YouTubeDebugger extends Component {
//   constructor() {
//     super();
//     this.state = {
//       errors: [],
//       user: null,
//       settings: {
//         bitrate: 8,
//         video: {
//           resolution: "1080p"
//         }
//       }
//     };
//   }

//   render() {
//     return (
//       <div>
//         <button className="bitrate" onClick={this.handleBitrate}>
//           Change Bitrate
//         </button>
//         <button className="resolution" onClick={this.handleResolution}>
//           Change Resolution
//         </button>
//       </div>
//     );
//   }

//   handleBitrate() {
//     this.setState({
//       ...this.state,
//       settings: {
//         ...this.state.settings.video,
//         bitrate: 12
//       }
//     });
//   }

//   handleResolution() {
//     this.setState({
//       ...this.state,
//       settings: {
//         ...this.state.settings,
//         resolution: "720p"
//       }
//     });
//   }
// }
