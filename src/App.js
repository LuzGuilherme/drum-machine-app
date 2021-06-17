import React from "react";
import { Component } from "react";
import DrumPad from "./Clips";

class App extends Component {

    render() { 
        return ( 
            <div>
                <div className="title">
                    <h1>Drum Machine</h1>
                </div>
                <DrumPad />
            </div>
        );
    }
}
 
export default App;