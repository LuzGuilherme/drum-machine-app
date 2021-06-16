import React from "react";
import { Component } from "react";
import ReactHowler from "react-howler";
import DrumPad from "./Clips";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { 

         }

    }

    render() { 
        return ( 
            <div>
                <DrumPad />
            </div>
        );
    }
}
 
export default App;