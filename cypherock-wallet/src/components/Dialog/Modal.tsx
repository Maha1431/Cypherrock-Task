import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import closeicon from "../../images/closeicon.svg";
import "./showdialog.css";

interface showDialogProps {
  showDialog: boolean;
  setShowDialog: (e: boolean) => void;
}

function Modals(props: showDialogProps) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State to hold success message

  const handleClose = () => {
    props.setShowDialog(false);
    setSuccessMessage(""); // Reset success message on close
  };
  const token = process.env.REACT_APP_BLOCKCYPHER_TOKEN;
 
  const handleSubmit = async () => {
    // Prepare the payload
    const payload = {
      name: name,
      addresses: [address],
    };

    try {
      // Make the API call
      const response = await fetch(
        `https://api.blockcypher.com/v1/btc/main/wallets?token=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response from API:", data);

      // Set success message
      setSuccessMessage("Wallet successfully created!");

      // Optionally, close dialog after a delay
      setTimeout(() => {
        handleClose();
      }, 3000); // Adjust the delay as needed
    } catch (error) {
      console.error("Error submitting data:", error);
    }
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
              Import Wallet
              <img
                src={closeicon}
                alt="closeicon"
                className="closebtn"
                onClick={handleClose}
              />
            </div>
          </div>
          <div className="indexDisplay">
            <div className="dialogFlow">
              <div className="receiveInner">
                <div className="receiveComp">
                  <label>Enter your Wallet name :</label>
                  <input
                    className="wallet"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="receiveComp">
                  <label>Enter your Mnemonic :</label>
                  <textarea
                    className="wallet"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <button className="reVerifyBtn" onClick={handleSubmit}>
                  Submit
                </button>
                {successMessage && (
                  <div className="successMessage">{successMessage}</div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modals;
