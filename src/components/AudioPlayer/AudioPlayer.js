import React, { Component } from 'react';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <div className="audio-player">
      <div>Audio Icon Here</div>
      <p>{this.props.audioUrl}</p>
      <button>Listen</button>
    </div>
  }
}

export default AudioPlayer;