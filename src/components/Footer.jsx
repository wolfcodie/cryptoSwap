import React from "react";
import Side_Logo from "../assets/Side_Logo";
function Footer() {
  return (
    <footer>
      <div className="footer_main flex">
        <article className="footer_left">
          <Side_Logo />
          <p>
            The No Sign-Up Crypto Exchange. Shift between BTC, ETH, BCH, XMR,
            XAI and 100+ other cryptocurrencies, no account required. 🎈
          </p>
          <div className="social">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </article>
        <article className="footer_links flex">
          <ul className="footer_ul_links">
            <li>
              <a href="">TREASURY</a>
            </li>
            <li>
              <a href="">INTEGRATIONS</a>
            </li>
            <li>
              <a href="">EMBED</a>
            </li>
            <li>
              <a href="">JOBS</a>
            </li>
          </ul>
          <ul className="footer_ul_links">
            <li>
              <a href="">ACCOUNT</a>
            </li>
            <li>
              <a href="">REFER A HUMAN</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">BRAND ASSETS</a>
            </li>
          </ul>
          <ul className="footer_ul_links">
            <li>
              <a href="">LISTED COINS</a>
            </li>
            <li>
              <a href="">XAI WHITE PAPER</a>
            </li>
            <li>
              <a href="">STATISTICS</a>
            </li>
            <li>
              <a href="">RESEARCH</a>
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
