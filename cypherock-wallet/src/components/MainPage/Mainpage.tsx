import React from "react";
import "./mainpage.css";

import bitcoinLogo from "../../images/bitcoin.svg";
import etherLogo from "../../images/ether.svg";
import etherBlueLogo from "../../images/etherblue.svg";
import binanceLogo from "../../images/binance.svg";
import SingleTransaction from "../SingleTransaction/SingleTransaction";
function Mainpage() {
  return (
    <div className="mainpage">
      <div className="coinFiltersWrapper">
        <p className="coinCount">Total Coins-7</p>
      </div>
      <SingleTransaction
        name="BITCOIN"
        val="BTC 0.0025600"
        amount="USD 0.5268"
        src={bitcoinLogo}
      />
      <SingleTransaction
        name="ETHEREUM"
        val="ETH 0.0025600"
        amount="USD 0.5268"
        src={etherLogo}
      />
      <SingleTransaction
        name="BINANCE COIN"
        val="BTC 0.0025600"
        amount="USD 0.5268"
        src={binanceLogo}
      />
      <SingleTransaction
        name="BITCOIN"
        val="BTC 0.0025600"
        amount="USD 0.5268"
        src={bitcoinLogo}
      />
      <SingleTransaction
        name="ETHEREUM"
        val="ETH 0.0025600"
        amount="USD 0.5268"
        src={etherBlueLogo}
      />
    </div>
  );
}

export default Mainpage;
