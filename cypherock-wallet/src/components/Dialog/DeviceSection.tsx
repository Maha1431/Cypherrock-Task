import React from "react";
import arrowicon from "../../images/arrowicon.svg";
import tickicon from "../../images/tickicon.png";

function DeviceSection() {
  return (
    <div className="receiveInner">
      <p className="receiveInnerTitle">Follow the instruction on device</p>
      <div className="receiveComp">
        <img src={arrowicon} alt="arrowicon"></img> Select the Wallet On device
        <img src={tickicon} alt="tickicon" className="tickicon"></img>
      </div>
      <div className="receiveComp">
        <img src={arrowicon} alt="arrowicon"></img> Select the Coin on device
        <img src={tickicon} alt="tickicon" className="tickicon"></img>
      </div>
      <div className="receiveComp">
        <img src={arrowicon} alt="arrowicon"></img> Tap 1 card of any 4 Cards
        <img src={tickicon} alt="tickicon" className="tickicon"></img>
      </div>
    </div>
  );
}

export default DeviceSection;
