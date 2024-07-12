import React, { useState } from "react";
import "./singletransaction.css";
import ShowDialog from "../Dialog/ShowDialog";

interface singleTransactionProps {
  name: string;
  val: string;
  src: string;
}
function Wallet(props: singleTransactionProps) {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <ShowDialog showDialog={showDialog} setShowDialog={setShowDialog} />
      <div className="singletransaction">
        <div className="coinName">
          <img src={props.src} alt="coinicon"></img>
          {props.name}
        </div>
        <div className="coinValue">{props.val}</div>
        
      </div>
    </>
  );
}

export default Wallet;
