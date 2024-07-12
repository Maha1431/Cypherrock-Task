import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import closeicon from "../../images/closeicon.svg";
import "./showdialog.css";
import DeviceSection from "./DeviceSection";
import VerificationSection from "./VerificationSection";
import ReceiveSection from "./ReceiveSection";
import tickicondialog from "../../images/tickicondialog.png";

interface showDialogProps {
  showDialog: boolean;
  setShowDialog: (e: boolean) => void;
}

function ShowDialog(props: showDialogProps) {
  const [index, setIndex] = useState(1);
  const changeIndex = (e: number) => {
    setIndex(e);
  };
  const handleClose = () => {
    props.setShowDialog(false);
  };
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth="sm"
        open={props.showDialog}
        onClose={handleClose}
      >
        <DialogContent
          style={{ height: "500px", backgroundColor: "rgba(19, 22, 26, 1)" }}
        >
          <div className="dialogHeader">
            <div className="dialogTitle">
              Receive
              <img
                src={closeicon}
                alt="closeicon"
                className="closebtn"
                onClick={handleClose}
              ></img>
            </div>
          </div>
          <div className="indexDisplay">
            <div className="dialogFlow">
              <div
                className={
                  index === 1
                    ? "dialogFlowComp dialogFlowCompActive"
                    : "dialogFlowComp dialogFlowCompVisited"
                }
                onClick={() => changeIndex(1)}
              >
                {index === 1 ? 1 : <img src={tickicondialog} alt="tick" />}
              </div>
              <div
                className={
                  index === 2
                    ? "dialogFlowComp dialogFlowCompActive"
                    : index < 2
                    ? "dialogFlowComp dialogFlowCompUpcoming"
                    : "dialogFlowComp dialogFlowCompVisited"
                }
                onClick={() => changeIndex(2)}
              >
                {index <= 2 ? 2 : <img src={tickicondialog} alt="tick" />}
              </div>
              <div
                className={
                  index === 3
                    ? "dialogFlowComp dialogFlowCompActive"
                    : "dialogFlowComp dialogFlowCompUpcoming"
                }
                onClick={() => changeIndex(3)}
              >
                3
              </div>
            </div>
            <div className="flowLine"></div>
            <div className="dialogFlow dialogflowName">
              <div className="dialogFlowDetails">Device</div>
              <div className="dialogFlowDetails">Verification</div>
              <div className="dialogFlowDetails">Receive</div>
            </div>
          </div>
          {index === 1 ? <DeviceSection /> : null}
          {index === 2 ? <VerificationSection /> : null}
          {index === 3 ? <ReceiveSection /> : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ShowDialog;
