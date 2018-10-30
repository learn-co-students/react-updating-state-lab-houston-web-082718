// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: { resolution: '1080p' }
            }
        }
    }
    bitrateHandler = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            },
        })
    }

    resolutionHandler = (event) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.bitrateHandler}>Change Bitrate</button>
                <button className='resolution' onClick={this.resolutionHandler}>Change Resolution</button>
            </div>
        )
    }
}