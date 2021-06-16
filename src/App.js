import React from "react";
import DrumPad from "./DrumPad";
import { Component } from "react";
import ReactHowler from "react-howler";

class App extends Component {
    constructor(props) {
        super(props)
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
                <DrumPad keyboard="Q" playSound={this.handlePlay}/>
            </div>
        );
    }
}
 
export default App;