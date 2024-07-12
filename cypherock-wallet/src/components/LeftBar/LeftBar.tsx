import React, { useState } from "react";
import walleticon from "../../images/walleticon.svg";
import trans from "../../images/transicon.svg";
import "./leftbar.css";
import Mainpage from "../MainPage/Mainpage";
import MainWallet from "../MainPage/MainWallet";
import  Modal  from "../Dialog/Modal";
import Modals from "../Dialog/Modal";

function LeftBar() {
  const [isWalletClicked, setIsWalletClicked] = useState(false);
  const [isTransactionClicked, setIsTransactionClicked] = useState(false);
  const[isClicked, setIsClicked] = useState(false);
  const [showDialog, setShowDialog] = useState(false); // State to manage modal visibility

  const handleWalletClick = () => {
    setIsWalletClicked(true);
    setIsTransactionClicked(false);
    setShowDialog(false); // Close modal if open
  };

  const handleTransactionClick = () => {
    setIsTransactionClicked(true);
    setIsWalletClicked(false);
    setShowDialog(false); // Close modal if open
  };

  const handleClick =() => {
    setIsClicked(!isClicked);
    setShowDialog(!showDialog); // Toggle modal visibility
  }

  return (
    <div className="leftbar">
      <div className="leftbarContent">
        <div className="leftbarItem left">
          <div 
            onClick={handleWalletClick} 
            style={{ color: isWalletClicked ? 'rgba(120, 91, 60, 1)' : 'white' }}
          >
            <img src={walleticon} alt="icons" /> Wallets
          </div>
          <button className="addCoin" onClick={handleClick}>
            <span className="plus">+</span> Import Wallet
          </button>
        </div>
        <div>Import Wallet</div>
        <div className="leftbarItem"
          onClick={handleTransactionClick} 
          style={{ color: isTransactionClicked ? 'rgba(120, 91, 60, 1)' : 'white' }}
        >
          <img src={trans} alt="icons" /> Last Transactions
        </div>

      </div>
      {isTransactionClicked && (
        <div className="mainPageContainer">
          <Mainpage />
        </div>
      )}
      
      {isWalletClicked && (
        <div className="mainPageContainer">
          <MainWallet/>
        </div>
      )}
      {showDialog && (
        <div className="mainPageContainer">
          <Modals showDialog={showDialog} setShowDialog={setShowDialog} />
        </div>
      )}
      <div className="leftbarBtnDiv">
        <button className="leftbarBtn">Support</button>
      </div>
    
    </div>
  );
}

export default LeftBar;
