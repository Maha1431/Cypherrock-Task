import React, { useState } from "react";
import "./singletransaction.css";
import send from "../../images/send.svg";
import receive from "../../images/receive.svg";
import ShowDialog from "../Dialog/ShowDialog";

interface singleTransactionProps {
  name: string;
  amount: string;
  val: string;
  src: string;
}
function SingleTransaction(props: singleTransactionProps) {
  const [showDialog, setShowDialog] = useState(false);
  const showDialogFunc = (e: boolean) => {
    setShowDialog(e);
  };

  return (
    <>
      <ShowDialog showDialog={showDialog} setShowDialog={setShowDialog} />
      <div className="singletransaction">
        <div className="coinName">
          <img src={props.src} alt="coinicon"></img>
          {props.name}
        </div>
        <div className="coinValue">{props.val}</div>
        <div className="transactionAmount">{props.amount}</div>
        <div className="transactions">
          <div className="receive" onClick={() => showDialogFunc(true)}>
            <img src={receive} alt="receive"></img>RECEIVE
          </div>
          <div className="send" onClick={() => showDialogFunc(true)}>
            <img src={send} alt="send"></img>SEND
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleTransaction;
