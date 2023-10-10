import React from "react";
import Chart_stake from "./Chart_stake";

function Staking_Stats() {
  return (
    <section className="Staking_Stats ">
      <h1>Staking Stats</h1>
      <div className="flex">
        <div className="Staking_Stats_left">
          <article>
            <h4>XAI/USD</h4>
            <p>
              0.11766{" "}
              <span className="green">
                <i className="fa-solid fa-caret-up"></i>1,74%
              </span>
            </p>
          </article>
          <hr />
          <article>
            <h4>STAKING APY</h4>
            <p>
              13.81%
              <span className="red">
                <i className="fa-solid fa-caret-down"></i> 10,85%
              </span>
            </p>
          </article>
          <hr />
          <article>
            <h4>TOTAL VALUE LOCKED</h4>
            <p>$12,344,167</p>
          </article>
        </div>
        <div className="Staking_Stats_right">
          <Chart_stake />
        </div>
      </div>
    </section>
  );
}

export default Staking_Stats;
