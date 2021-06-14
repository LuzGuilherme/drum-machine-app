import React from "react";

const DrumPad = ({keyboard, playSound}) => {
    return (
        <button onClick={playSound}>{keyboard}</button>
    )
}

export default DrumPad;