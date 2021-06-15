import React from "react";
import DrumPad from "./DrumPad";
import { Component } from "react";
import ReactHowler from "react-howler";

class App extends Component {
    constructor(props) {
        super(props)

        this.clips = [
            {
                keyboard: "Q",
                label: "Heater-1",
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
            },
            {
                keyboard: "W",
                label: 'Heater-2',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
            },
            {
                keyboard: "E",
                label: 'Heater-3',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
            },
            {
                keyboard: "A",
                label: 'Heater-4',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
            },
            {
                keyboard: "S",
                label: 'Clap',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
            },
            {
                keyboard: "D",
                label: 'Open-HH',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
            },
            {
                keyboard: "Z",
                label: "Kick-n'-Hat",
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
            },
            {
                keyboard: "X",
                label: 'Kick',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
            },
            {
                keyboard: "C",
                label: 'Closed-HH',
                src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
            },
        ]

        this.state = { 
            playing: false,
            currentSrcIndex: 2
         }

         this.handlePlay = this.handlePlay.bind(this);
    }

     handlePlay() {
         this.setState({
            playing: true,
         })
     }

    render() { 
        return ( 
            <div>
                <ReactHowler 
                    src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
                    playing={this.state.playing}
                />
                <DrumPad keyboard="Q" playSound={this.handlePlay}/>
            </div>
        );
    }
}
 
export default App;