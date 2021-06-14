import React from "react";
import DrumPad from "./DrumPad";
import { Component } from "react";
import ReactHowler from "react-howler";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            playing: false,
            sound: {}
         }

         this.handlePlay = this.handlePlay.bind(this);
    }

     handlePlay() {
         this.setState({
             playing: true
         })
     }

    render() { 
        return ( 
            <div>
                <ReactHowler 
                    src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                    playing={this.state.playing}
                />
                <DrumPad keyboard="Q" playSound={this.handlePlay} />
            </div>
        );
    }
}
 
export default App;