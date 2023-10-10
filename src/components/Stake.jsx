import React from "react";
import "./stake_page/stake.css";
import Why from "./stake_page/Why";
import Staking_Stats from "./stake_page/Staking_Stats";
import How from "./stake_page/How";

function Stake() {
  return (
    <main className="stake_main">
      <section className="stake_section flex">
        <div className="stake_left">
          <h1>Stake + Earn 🎈</h1>
          <p>
            Stake SideShift Token (XAI) on-chain and receive svXAI in return.
            Earn 25% of SideShift.ai’s revenue, distributed daily.
          </p>
        </div>
        <div className="stake_right">
          <button>CONNECT WALLET</button>
        </div>
      </section>
      <Why />
      <Staking_Stats />
      <How />
      <section className="stake_section start_stake flex">
        <div className="start_left ">
          <h1>It's time to start earning XAI</h1>
        </div>
        <div className="stake_right">
          <button>CONNECT WALLET</button>
        </div>
      </section>
    </main>
  );
}

export default Stake;
