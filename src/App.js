import React, { Component } from 'react';
import './App.css';

import AudioPlayer from './components/AudioPlayer/AudioPlayer';

const possibleSoundArray = [
  "p",
  "b",
  "c",
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "http://audio.com/files"
    }
  }
  
  populateOptions() {
    //create code to choose four options with one being correct
  }

  render() {
    return <div>
      <AudioPlayer audioUrl={this.state.url}/>
      <AnswerOptions>
        <Option text={"p"} />
        <Option text={"b"} />
      </AnswerOptions>
    </div>
  }
}

export default App;
