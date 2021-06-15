import React from "react";

const DrumPad = ({ keyboard, playSound, index }) => {
  return <button onClick={(playSound, index)}>{keyboard}</button>;
};

export default DrumPad;
