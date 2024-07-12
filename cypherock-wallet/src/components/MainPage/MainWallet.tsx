import React from "react";
import "./mainpage.css";

import bitcoinLogo from "../../images/bitcoin.svg";
import etherLogo from "../../images/ether.svg";
import etherBlueLogo from "../../images/etherblue.svg";
import binanceLogo from "../../images/binance.svg";

import Wallet from "../SingleTransaction/wallet";
function MainWallet() {
  return (
    <div className="mainpage">
      <div className="coinFiltersWrapper">
        <p className="coinCount">Total Coins-7</p>
      </div>
   
      <Wallet
        name="BITCOIN"
        val="BTC 0.0025600"
        
        src={bitcoinLogo}
      />
      <Wallet
        name="ETHEREUM"
        val="ETH 0.0025600"
       
        src={etherLogo}
      />
      <Wallet
        name="BINANCE COIN"
        val="BTC 0.0025600"
       
        src={binanceLogo}
      />
      <Wallet
        name="BITCOIN"
        val="BTC 0.0025600"
     
        src={bitcoinLogo}
      />
      <Wallet
        name="ETHEREUM"
        val="ETH 0.0025600"
       
        src={etherBlueLogo}
      />
    </div>
  );
}

export default MainWallet;
