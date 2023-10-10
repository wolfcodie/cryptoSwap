import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Side_Logo from "../assets/Side_Logo";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showWallet, setshowWallet] = useState(false);

  useEffect(() => {
    function handleResize() {
      setShowNav(window.innerWidth < 600 && showNav);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <header>
      <nav className="navbar flex">
        {showNav ? (
          <i
            className="fa-solid fa-xmark close_burger"
            onClick={() => setShowNav(false)}
          ></i>
        ) : (
          <i
            onClick={() => setShowNav(true)}
            className="fa-solid fa-bars burger"
          ></i>
        )}
        <Side_Logo />
        {window.innerWidth < 600 && showNav ? (
          <ul className="mobile_nav flex">
            <li>
              <Link to="/">SHIFT</Link>
            </li>
            <li>
              <Link to="/Stake">STAKE</Link>
            </li>
            <li>
              <Link to="/Integrate">INTEGRATE</Link>
            </li>
            <li>
              <Link to="/History">HISTORY</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex desktop_nav">
            <li>
              <Link to="/">SHIFT</Link>
            </li>
            <li>
              <Link to="/Stake">STAKE</Link>
            </li>
            <li>
              <Link to="/Integrate">INTEGRATE</Link>
            </li>
            <li>
              <Link to="/History">HISTORY</Link>
            </li>
          </ul>
        )}
        {showWallet && (
          <div className="wallet_box_big">
            <div className="wallet_box_top">
              <p>Balance:</p>
              <span>0 XAI</span>
              <br />
              <small>0 USD</small>
            </div>
            <div className="wallet_box_bottom">
              <ul>
                <li>
                  <a href="">Connect Wallet</a>
                </li>
                <li>
                  <a href="">Buy XAI</a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
                <li>
                  <a href="">Refer a human</a>
                </li>
                <li>
                  <a href="">Help</a>
                </li>
              </ul>
            </div>
          </div>
        )}

        <section className="flex_1">
          <div
            className="wallet_box flex"
            onClick={() => setshowWallet(!showWallet)}
          >
            <svg
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:text-flashbang-white text-new-black w-5"
            >
              <path
                d="M19.679 7.887h-1.352c-.122 0-.327-.008-.327-.13V6.393c0-.123.006-.284-.117-.284h-1.357c-.123 0-.304-.038-.304-.16V4.591c0-.123-.018-.26-.14-.26h-1.355c-.122 0-.283-.063-.283-.185V2.783c0-.122-.069-.22-.191-.22-.444.004-.898.004-1.358.004-.123 0-.228.1-.228.223v1.35c0 .124-.057.191-.18.191H7.502c-.123 0-.169-.067-.169-.19V2.79c0-.123-.126-.223-.249-.223-.455 0-.883 0-1.322-.003-.123-.001-.206.097-.206.22v1.376c0 .123-.158.172-.281.172H3.91c-.123 0-.132.15-.132.272v1.358c0 .123-.19.148-.313.148h-1.36c-.123 0-.327.174-.327.297v1.36c0 .123.005.12-.117.12H.32C.2 7.887 0 8.089 0 8.21v4.929c0 .123.199.303.321.303H1.66c.123 0 .118-.18.118-.303v-3.137c0-.123.204-.115.326-.115h1.374c.123 0 .3-.008.3.115v3.156c0 .123.06.223.183.223.456 0 .917 0 1.356.003.123.002.239-.097.239-.22V11.81c0-.123.027-.144.15-.144h8.59c.122 0 .221.06.221.183 0 .456 0 .916-.004 1.36 0 .123.097.234.22.234h1.354c.122 0 .135-.162.135-.285v-3.152c0-.123.186-.118.309-.118h1.381c.123 0 .31-.005.31.118v3.133c0 .123.012.304.135.304h1.321c.123 0 .322-.18.322-.303V8.2c0-.123-.199-.314-.321-.314Zm-12.346-.14c0 .122-.139.14-.261.14H5.714c-.123 0-.158-.018-.158-.14V6.39c0-.122.035-.282.158-.282h1.357c.123 0 .262.16.262.283v1.354Zm7.111.003c0 .123-.037.137-.16.137H12.93c-.123 0-.263-.014-.263-.137V6.394c0-.123.14-.285.263-.285h1.355c.122 0 .16.162.16.285V7.75Z"
                fill="currentColor"
              ></path>
              <path
                d="m8.869 13.4-1-.001-2.162-.008a.22.22 0 0 0-.223.221c.004.445.003.918.003 1.363 0 .122.099.248.222.248h3.143c.123 0 .256-.153.256-.275v-1.326c0-.123-.117-.223-.24-.223ZM14.375 13.399c-.035.002-.053.027-.088.027-1.059 0-2.1.024-3.158.024h-.1c-.056 0-.138.053-.138.176v1.329c0 .123.136.272.26.272h3.14c.122 0 .155-.15.155-.272v-1.346c0-.123-.013-.215-.071-.21ZM3.933 2.559h1.345c.123 0 .221-.096.22-.219-.003-.444-.004-.892-.004-1.336 0-.123-.1-.223-.222-.223h-1.34c-.122 0-.15.104-.15.226v1.337c0 .123.028.215.15.215ZM14.701 2.571c.444-.004.873-.004 1.318-.004.123 0 .204-.1.204-.223V1.005c0-.123-.03-.224-.152-.224h-1.336c-.123 0-.29.102-.29.224v1.346c0 .123.133.221.256.22Z"
                fill="currentColor"
              ></path>
            </svg>
            <p>oxB4WLEY9o</p>
            {showWallet ? (
              <i className="fa-solid fa-chevron-up fa-shake"></i>
            ) : (
              <i className="fa-solid fa-chevron-down fa-shake"></i>
            )}
          </div>
        </section>
      </nav>
      <div
        className="under_nav flex
      "
      >
        <p>
          1 svxai = 1.2031 XAI{" "}
          <span className="percent_up">
            <i className="fa-solid fa-caret-up"></i>0.06%
          </span>
        </p>
        <p>
          1 XAI = 0.119960 USD{" "}
          <span className="percent_down">
            <i className="fa-solid fa-caret-down"></i>0.03%
          </span>
        </p>
        <p>
          Staking APY: 22.36%{" "}
          <span className="percent_up">
            <i className="fa-solid fa-caret-up"></i>10.83%
          </span>
        </p>
      </div>
    </header>
  );
}

export default Navbar;
