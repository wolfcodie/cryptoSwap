import React from "react";
import shape from "../../assets/5shape.png";

function How() {
  return (
    <section className="why_section flex">
      <div className="why_left how_left">
        <h1>How To Stake</h1>
      </div>
      <div className="why_right how_right">
        <article>
          <div className="flex">
            <div className="first_how_left">
              <img
                alt="On-Chain Icon"
                src={shape}
                className="undefined h-4 w-4"
              />
              <h2>1</h2>
            </div>
            <div className="first_how_right">
              <h3>CONNECT WALLET</h3>
              <p>Visit the Staking Dashboard and connect your MetaMask.</p>
            </div>
          </div>
        </article>
        <article>
          <div className="flex">
            <div className="first_how_left">
              <img
                alt="On-Chain Icon"
                src={shape}
                className="undefined h-4 w-4"
              />
              <h2>2</h2>
            </div>
            <div className="first_how_right">
              <h3>GET YOUR FUNDS READY</h3>
              <p>
                Buy XAI and send the tokens to your connected wallet address, or
                stake using other coins.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className="flex">
            <div className="first_how_left">
              <img
                alt="On-Chain Icon"
                src={shape}
                className="undefined h-4 w-4"
              />
              <h2>3</h2>
            </div>
            <div className="first_how_right">
              <h3>STAKE</h3>
              <p>
                Stake XAI and receive svXAI in return which represents your
                share in the SideShift Staking vault. Good job! 🎈
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default How;
