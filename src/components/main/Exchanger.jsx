import React, { useState, useEffect } from "react";
import eth from "../../assets/eth.png";
import change from "../../assets/changeBtn.png";

function Exchanger() {
  //api
  const apiKey =
    "a2f05886b2412144ca467463be25e3c6c654a5782c06b5661c7339450212da76";
  const apiList = `https://data-api.cryptocompare.com/asset/v1/summary/list?asset_type=BLOCKCHAIN&apiKey=${apiKey}`;

  // api
  //stats
  const [coins, setCoins] = useState([]);
  const [fixed, setfixed] = useState(false);
  const [pop1, setpop1] = useState(false);
  const [pop2, setpop2] = useState(false);
  const [price, setprice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery1, setSearchQuery1] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");
  const [selectedCoin, setSelectedCoin] = useState({
    ID: 1,
    SYMBOL: "BTC",
    ASSET_TYPE: "BLOCKCHAIN",
    NAME: "Bitcoin",
    LOGO_URL:
      "https://resources.cryptocompare.com/asset-management/1/1659708726266.png",
  });
  const [selectedCoin2, setSelectedCoin2] = useState({
    ID: 2,
    SYMBOL: "ETH",
    ASSET_TYPE: "BLOCKCHAIN",
    NAME: "Ethereum",
    LOGO_URL:
      "https://resources.cryptocompare.com/asset-management/2/1659946678476.png",
  });

  // functions
  const handleLiClick = (coin) => {
    setSelectedCoin(coin);
    setpop1(false);
  };
  const handleLiClick2 = (coin) => {
    setSelectedCoin2(coin);
    setpop2(false);
  };
  // console.log(selectedCoin2);
  // end functons
  const apiUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${selectedCoin.SYMBOL}&tsyms=${selectedCoin2.SYMBOL}&api_key=${apiKey}`;
  useEffect(() => {
    fetch(apiList)
      .then((response) => response.json())
      .then((data) => {
        setCoins(data.Data.LIST);
      });
  }, []);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const firstObject = data[selectedCoin.SYMBOL];
        const secondObject = firstObject[selectedCoin2.SYMBOL];
        setprice(secondObject);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCoin, selectedCoin2]);

  return (
    <section className="exchanger">
      <div className="exchanger_top_buttons">
        <button
          onClick={() => setfixed(false)}
          className={fixed ? "" : "active"}
        >
          Variable rate
        </button>
        <button
          className={fixed ? "active" : ""}
          onClick={() => setfixed(true)}
        >
          Fixed rate
        </button>
      </div>
      <p className="exchanger_prices">
        1 {selectedCoin.SYMBOL}= {price} {selectedCoin2.SYMBOL}
      </p>
      <div className="flex exchanger_coins">
        <article onClick={() => setpop1(true)}>
          <img src={selectedCoin.LOGO_URL} alt="Edge Logo" />
          <p>you Send </p>
          <h4>{selectedCoin.SYMBOL}</h4>
        </article>
        <button>
          <img src={change} alt="" />
        </button>
        <article onClick={() => setpop2(true)}>
          <img src={selectedCoin2.LOGO_URL} alt="Edge Logo" />
          <p>you Send </p>
          <h4>{selectedCoin2.SYMBOL}</h4>
        </article>
      </div>
      {fixed && (
        <form className="fixed_form">
          <input
            onChange={(e) => setSearchQuery2(e.target.value)}
            type="text"
            placeholder="You Send"
          />
          <p>=</p>
          <input
            value={searchQuery2 * price}
            type="text"
            placeholder="You Recive"
          />
        </form>
      )}
      <div className="exchanger_bottom">
        <h2>Receiving address</h2>
        <input type="text" placeholder="Your USDT (ERC-20) address" />
        <button className="full_btn">GET ADDRESS FROM WALLET</button>
        <button className="outline_btn">SHIFT</button>
      </div>
      {/* pop up  */}
      {pop2 && (
        <div className="popUp">
          <section className="coins_list">
            <div className="pop_top flex">
              <h2>You receive</h2>
              <button onClick={() => setpop2(false)}>X</button>
            </div>
            <div className="flex serach_coin">
              <i className="fa-solid fa-magnifying-glass fa-shake"></i>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <ul className="coins_container">
              <h4>POPULAR</h4>
              {coins
                .filter(
                  (coin) =>
                    coin.NAME.toLowerCase().includes(
                      searchQuery.toLowerCase()
                    ) ||
                    coin.SYMBOL.toLowerCase().includes(
                      searchQuery.toLowerCase()
                    )
                )
                .map((coin) => (
                  <li
                    data-name={coin}
                    key={coin.ID}
                    className="flex"
                    onClick={() => handleLiClick2(coin)}
                  >
                    <img src={coin.LOGO_URL} alt="eth" />
                    <article>
                      <h2>{coin.NAME}</h2>
                      <br />
                      <p>{coin.SYMBOL}</p>
                    </article>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      )}
      {pop1 && (
        <div className="popUp">
          <section className="coins_list">
            <div className="pop_top flex">
              <h2>You SEND</h2>
              <button onClick={() => setpop1(false)}>X</button>
            </div>
            <div className="flex serach_coin">
              <i className="fa-solid fa-magnifying-glass fa-shake"></i>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery1}
                onChange={(e) => setSearchQuery1(e.target.value)}
              />
            </div>
            <ul className="coins_container">
              <h4>POPULAR</h4>
              {coins
                .filter(
                  (coin) =>
                    coin.NAME.toLowerCase().includes(
                      searchQuery1.toLowerCase()
                    ) ||
                    coin.SYMBOL.toLowerCase().includes(
                      searchQuery1.toLowerCase()
                    )
                )
                .map((coin) => (
                  <li
                    data-name={coin}
                    key={coin.ID}
                    className="flex"
                    onClick={() => handleLiClick(coin)}
                  >
                    <img src={coin.LOGO_URL} alt="eth" />
                    <article>
                      <h2>{coin.NAME}</h2>
                      <br />
                      <p>{coin.SYMBOL}</p>
                    </article>
                  </li>
                ))}
            </ul>
          </section>
        </div>
      )}
    </section>
  );
}

export default Exchanger;
