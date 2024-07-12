import React from "react";

function ReceiveSection() {
  return (
    <div className="receiveInner">
      <p className="receiveInnerTitle">Coin Address</p>
      <div className="receiveAmount receiveAmountCopy">
        <div className="receiveAmountValue">25BKJNKNLJL58fjkdhfk26dnfds15</div>

        <div className="copyBtn">Copy</div>
      </div>
      <p className="addressVerified">!address verified</p>
      <button className="reVerifyBtn">Re-Verify</button>
    </div>
  );
}

export default ReceiveSection;
