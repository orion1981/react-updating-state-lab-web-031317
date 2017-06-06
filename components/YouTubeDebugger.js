import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(){
    super()

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

      handleBitrate(){
        this.setState({
            errors: [],
            user: null,
            settings: {
              bitrate: 12,
              video: {
                resolution: '1080p'
              }
            }
          })
        }

      handleResolution(){
        this.setState({
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '720p'
              }
            }
          })
        }

      render() {
      return (
        <div>
          <button className="bitrate" onClick={this.handleBitrate.bind(this)}>Change bitrate</button>
          <button className="resolution" onClick={this.handleResolution.bind(this)}>Change resolution</button>
        </div>
      )
    }
}
