import React from "react";
import Exchanger from "./main/Exchanger";
import Recent from "./main/Recent";
import Volume from "./main/Volume";
import Staking from "./main/Staking";
import Price from "./main/Price";
import StakingApy from "./main/StakingApy";
import invityLogo from "../assets/invity-logo.png";
import trezorLogo from "../assets/trezor-logo.png";
import bitcoinComLogo from "../assets/bitcoin-com.png";
import edgeLogo from "../assets/edge-logo.png";
import monerujoLogo from "../assets/monerujo.png";

function Main() {
  return (
    <div className="main">
      <h1>No Sign-Up Crypto Exchange</h1>
      <p className="first_p">
        Shift between BTC, ETH, BCH, XMR, XAI and 75+ other cryptocurrencies.
        The best exchange rates, no account required.
      </p>
      <Exchanger />
      <Recent />
      <Volume />
      <Staking />
      <Price />
      <StakingApy />
      <section className="Trusted">
        <h1>Integrate SideShift</h1>
        <p>
          Integrate and earn commission. Trusted by 20+ industry-leading
          companies.
        </p>
        <div className="companies flex">
          <article>
            <img src={trezorLogo} alt="Trezor Logo" />
          </article>

          <article>
            <img src={invityLogo} alt="Invity Logo" />
          </article>

          <article>
            <img src={bitcoinComLogo} alt="Bitcoin.com Logo" />
          </article>

          <article>
            <img src={edgeLogo} alt="Edge Logo" />
          </article>
          <article>
            <img src={monerujoLogo} alt="Monerujo Logo" />
          </article>
        </div>
        <a href="" className="intgrate_btn">
          INTEGRATE
        </a>
      </section>
    </div>
  );
}

export default Main;
