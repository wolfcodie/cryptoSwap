import React from "react";

function Why() {
  return (
    <section className="why_section flex">
      <div className="why_left">
        <h1>Why Stake?</h1>
      </div>
      <div className="why_right">
        <article>
          <div className="flex">
            <img
              alt="On-Chain Icon"
              src="https://sideshift.ai/assets/link-3c28a416.svg"
              className="undefined h-4 w-4"
            />
            <h3>On-Chain</h3>
          </div>
          <p>
            Stake on the Ethereum Network and enjoy ERC-4626 staking, an
            innovative tokenized vault standard.
          </p>
        </article>
        <article>
          <div className="flex">
            <img
              alt="Auto-Compounding Icon"
              src="https://sideshift.ai/assets/layers-6ef904f6.svg"
              className="undefined h-4 w-4"
            />
            <h3>Auto-Compounding</h3>
          </div>
          <p>
            Your svXAI is automatically compounded as staking rewards are paid
            into the vault. No action required.
          </p>
        </article>

        <article>
          <div className="flex">
            <img
              alt="Daily Rewards Icon"
              src="https://sideshift.ai/assets/auto_awesome-4d37222b.svg"
              className="undefined h-4 w-4"
            />
            <h3>Daily Rewards</h3>
          </div>
          <p>
            25% of revenue is sent to the staking vault every day at 00:00 UTC.
            Every time staking rewards are added, the value of your svXAI
            increases.
          </p>
        </article>
        <article>
          <div className="flex">
            <img
              alt="Full Control Flexibility Icon"
              src="https://sideshift.ai/assets/security-3561ea85.svg"
              className="undefined h-4 w-4"
            />
            <h3>Full Control Flexibility</h3>
          </div>
          <p>
            You have full custody of your svXAI. Connect your Ethereum wallet to
            the dashboard and accrue rewards on-chain.
          </p>
        </article>
        <article>
          <div className="flex">
            <img
              alt="We grow, you grow Icon"
              src="https://sideshift.ai/assets/paid-346c6eb7.svg"
              className="undefined h-4 w-4"
            />
            <h3>We grow, you grow</h3>
          </div>
          <p>
            As SideShift.ai’s volume grows, the APY percentage paid to you every
            day does too.
          </p>
        </article>
        <article>
          <div className="flex">
            <img
              alt="Cutting edge dashboard Icon"
              src="https://sideshift.ai/assets/speed-057ef543.svg"
              className="undefined h-4 w-4"
            />
            <h3>Cutting edge dashboard</h3>
          </div>
          <p>
            Hook up your wallet and manage your staking activities from our
            easy-to-use dashboard.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Why;
