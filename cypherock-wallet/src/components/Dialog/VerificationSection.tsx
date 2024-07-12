import React from "react";
import arrowicon from "../../images/arrowicon.svg";
import tickicon from "../../images/tickicon.png";

function VerificationSection() {
  return (
    <div className="receiveInner">
      <div className="receiveAmount">25BKJNKNLJL58fjkdhfk26dnfds15</div>
      <p className="receiveInnerTitle">Verify address on device</p>
      <div className="receiveComp">
        <img src={arrowicon} alt="arrowicon"></img> Please match the address to
        be shown in X1 Wallet
        <img src={tickicon} alt="tickicon" className="tickicon"></img>
      </div>
    </div>
  );
}

export default VerificationSection;
