import React from "react";
import img1 from ".././assets/pi1.jpg";
import img3 from ".././assets/pi3.jpg";
import img4 from ".././assets/pi4.png";
import img5 from ".././assets/pi5.png";
import img6 from ".././assets/pi6_gif.gif";
import img7 from ".././assets/pi7.png";
import trophi from ".././assets/trophi.png";
import "./Integrate/integrate.css";

import Integrate_With from "./Integrate/Integrate_With";
import Intgrat_Faq from "./Integrate/Intgrat_Faq";

function Integrated() {
  return (
    <div className="Integrate_section">
      <article className="integrate_top flex flex">
        <div className="integrate_top_left">
          <h1>Integrate SideShift.ai</h1>
          <p>
            Rapid trading. 24/7 customer support. No sign-up from your users
            required.
          </p>
          <div className="flex">
            <button className="oranged_btn">VISIT API </button>
            <button>SET UP EMBED</button>
            <button>FAQ</button>
          </div>
        </div>
        <div className="integrate_top_right">
          <img src={img1} alt="" />
        </div>
      </article>
      {/* //section parteners */}
      <Integrate_With />
      <article className="integrate_top integrate_middle flex ">
        <div className="integrate_middle_left">
          <img src={img1} alt="" />
        </div>
        <div className="integrate_middle_right">
          <h2>Trezor</h2>
          <p>
            Trezor is the original hardware wallet. Humans can shift between
            crypto assets using SideShift.ai in Trezor Suite, without leaving
            the app.
          </p>
          <p>
            To use SideShift.ai with your Trezor, open Trezor Suite, visit the
            Trade tab and follow the prompts. Good job! 🎈
          </p>
        </div>
      </article>
      <article className="integrate_top integrate_middle flex ">
        <div className="integrate_middle_right integrate_middle_right2">
          <h2>Invity</h2>
          <p>
            Invity.io, a member of the SatoshiLabs Group, allows humans to buy,
            exchange, save and spend — all in one place. SideShift.ai has
            partnered with Invity to bring you secure, private and competitive
            shifts.
          </p>
          <p>
            Visit the Exchange Crypto section, set up your trade and select
            SideShift.ai.
          </p>
        </div>
        <div className="integrate_middle_left integrate_middle_left2">
          <img src={img3} alt="" />
        </div>
      </article>
      <article className="integrate_top integrate_middle flex ">
        <div className="integrate_middle_left integrate_middle_left3">
          <img src={img4} alt="" />
        </div>
        <div className="integrate_middle_right">
          <h2>Edge Wallet</h2>
          <p>
            One of the world’s go-to mobile wallets, Edge is a staple for many
            humans. Trade your favourite cryptocurrencies inside Edge with
            SideShift.ai.
          </p>
          <p>
            Learn how to shift inside Edge Wallet in our step-by-step guide.
          </p>
        </div>
      </article>
      <article className="integrate_top integrate_middle flex ">
        <div className="integrate_middle_right">
          <h2>Bitcoin.com Wallet</h2>
          <p>
            Pioneers of crypto education and adoption. The Bitcoin.com wallet is
            a multi-asset, non-custodial wallet that offers in-app shifts,
            powered by SideShift.ai.
          </p>
          <p>
            Follow our easy guide for humans and learn how to shift inside your
            Bitcoin.com wallet.
          </p>
        </div>
        <div className="integrate_middle_left integrate_middle_left3">
          <img src={img5} alt="" />
        </div>
      </article>
      <article className="integrate_top integrate_middle flex ">
        <div className="integrate_middle_left integrate_middle_left3">
          <img src={img7} alt="" />
          <img className="gif" src={img6} alt="" />
        </div>
        <div className="integrate_middle_right">
          <h2>Bitcoin.com Wallet</h2>
          <p>
            Pioneers of crypto education and adoption. The Bitcoin.com wallet is
            a multi-asset, non-custodial wallet that offers in-app shifts,
            powered by SideShift.ai.
          </p>
          <p>
            Follow our easy guide for humans and learn how to shift inside your
            Bitcoin.com wallet.
          </p>
        </div>
      </article>
      <article className="integrated_with integrated_with2">
        <h1>Don't just take our word for it...</h1>
        <div className="companies integrate_features flex">
          <article>
            <h2>"Reliable Partner for Bitcoin.com since 2019"</h2>
            <p>
              "SideShift has been a reliable partner for Bitcoin.com since 2019.
              Integrating the service into our app was simple, and the Sideshift
              team is responsive and supportive on the rare occasions they are
              needed. On the user side, swaps go through quickly, and the
              experience is non-intrusive. For a multichain, fully
              self-custodial product like the Bitcoin.com Wallet, Sideshift is
              the ideal solution."
            </p>
            <div className="flex">
              <h2>
                Dennis Jarvis <br /> CEO @ Bitcoin.com
              </h2>
              <img src={trophi} alt="" />
            </div>
          </article>
          <article>
            <h2>"One of the easiest and most seamless cooperation"</h2>
            <p>
              "Forging a strong partnership with SideShift was one of the
              easiest and most seamless cooperations we have had so far, thanks
              to their community-focused approach on the business side and
              reliabale API on the tech side. It’s always a pleasure to work
              with same minded companies."
            </p>
            <div className="flex">
              <h2>
                Bach Nguyen
                <br /> CBO @ Invity.io
              </h2>
              <img src={trophi} alt="" />
            </div>
          </article>
          <article>
            <h2>"Fast and Reliable Service"</h2>
            <p>
              "SideShift offers fast and reliable service, which means happy
              wallet users and fewer support requests! "
            </p>
            <div className="flex">
              <h2>
                Vik Sharma
                <br /> CEO @ Cake Wallet
              </h2>
              <img src={trophi} alt="" />
            </div>
          </article>
        </div>
      </article>
      <article className="integrated_with integrated_with2">
        <h1>Integrate</h1>
        <p>Add SideShift.ai powered shifts to your product or service today.</p>
        <div className="flex">
          <button className="oranged_btn">VISIT API </button>
          <button>SET UP EMBED</button>
          <button>FAQ</button>
        </div>
      </article>
      <Intgrat_Faq />
    </div>
  );
}

export default Integrated;
