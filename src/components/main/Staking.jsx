import React from "react";

function Staking() {
  return (
    <div className="Staking">
      <h1>Staking</h1>
      <p>
        Stake XAI and receive a share of 25% of SideShift.ai revenue,
        distributed daily.
      </p>
      <div className="flex">
        <article>
          <h2>104,264,562 xai</h2>
          <p>Total Staked</p>
        </article>
        <article>
          <h2>$11,893,459</h2>
          <p>Total Value Locked</p>
        </article>
        <article>
          <h2>24.66%</h2>
          <p> Latest APY</p>
        </article>
        <article>
          <h2>25.11%</h2>
          <p> Average APY</p>
        </article>
      </div>
      <button className="orange_btn">STAKE XAI</button>
      <button className="outline">LEARN MORE</button>
    </div>
  );
}

export default Staking;
