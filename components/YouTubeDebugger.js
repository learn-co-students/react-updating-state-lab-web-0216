const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };

    this.handleClickBitrate = this.handleClickBitrate.bind(this);
    this.handleClickResolution = this.handleClickResolution.bind(this);

  }

    handleClickBitrate() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12
        })
      });
    }

    handleClickResolution() {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          video: Object.assign({}, this.state.settings.video, { 
            resolution: '720p'
          })
        })   
      });
    }

    render() {
      return(
        <div>
          <button className="bitrate" onClick={this.handleClickBitrate}>Bitrate</button>
          <button className="resolution" onClick={this.handleClickResolution}>Resolution</button>
        </div>
      );
    }

}

require('../test/index-test.js');
module.exports = YouTubeDebugger;
