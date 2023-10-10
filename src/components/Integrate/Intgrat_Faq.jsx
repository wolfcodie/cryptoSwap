import React, { useState } from "react";

function Intgrat_Faq() {
  const [faq, setFaq] = useState({
    1: false,
    2: false,
  });

  const toggleFaq = (id) => {
    setFaq((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <article className="intgrat_Faq">
      <h1>FAQ</h1>
      <button onClick={() => toggleFaq(1)}>
        {faq[1] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        What fees will my users pay when using a SideShift.ai integration?
      </button>
      {faq[1] && (
        <p>
          Your users will pay the same fees as if they used sideshift.ai
          directly.
        </p>
      )}
      <button onClick={() => toggleFaq(2)}>
        {faq[2] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        How much do I earn as an integration partner?
      </button>
      {faq[2] && (
        <p>
          As an integration partner, you will receive 0.5% of all volume that
          passes through your integration.
        </p>
      )}
      <button onClick={() => toggleFaq(3)}>
        {faq[3] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        How do I check my earnings?{" "}
      </button>
      {faq[3] && (
        <p>
          Your integration is linked to your account ID. Any fees you earn from
          shifts will be visible in your <a href="">SideShift.ai account.</a>
        </p>
      )}
      <button onClick={() => toggleFaq(4)}>
        {faq[4] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        Which token are my earned fees accrued in?
      </button>
      {faq[4] && (
        <p>
          Integration partner fees are accrued in SideShift Token (XAI). You can
          convert and withdraw earnings to any SideShift.ai supported asset at
          any time by clicking “withdraw XAI” from <a href=""> your account.</a>
        </p>
      )}
      <button onClick={() => toggleFaq(5)}>
        {faq[5] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        Can I set up automatic withdrawals of my earnings?
      </button>
      {faq[5] && (
        <p>
          Yes. SideShift.ai can set a threshold for your earnings which when
          hit, would automatically withdraw funds to your address in any
          supported SideShift.ai asset. To set this up{" "}
          <a href=""> reach out to us.</a>
        </p>
      )}
      <button onClick={() => toggleFaq(6)}>
        {faq[6] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        Do I need to backup my account to protect my earnings?
      </button>
      {faq[6] && (
        <p>
          Yes. We advise all users to backup their Private Key. This can be
          restored at any time. To view your Private Key head to the{" "}
          <a href="">Account page.</a>
        </p>
      )}
      <button onClick={() => toggleFaq(7)}>
        {faq[7] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        How will my users receive support from SideShift.ai?
      </button>
      {faq[7] && (
        <p>
          Your users can contact us directly via
          <a href="">help@sideshift.ai</a> . For the fastest issue resolution
          they should include their order number, a link to the transaction in a
          block explorer and any other relevant details. Full details can be
          found in this help article.
          <br />
          <br />
          Integration partners with in-house support who prefer to be the main
          point of contact with their users can continue to do so. If this is
          preferred we create shared communication channels between our support
          teams. <a href=""> Reach out to us </a>to set this up.
        </p>
      )}
      <button onClick={() => toggleFaq(8)}>
        {faq[8] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        Is it safe for users to shift via my SideShift.ai integration?
      </button>
      {faq[8] && (
        <p>
          SideShift.ai aims to minimize third-party risk as much as possible.
          SideShift.ai only holds control of your funds during the exchange
          process. In the unlikely event an exchange cannot be processed,
          SideShift.ai will request a refund address and issue a refund.
        </p>
      )}
      <button onClick={() => toggleFaq(9)}>
        {faq[9] ? (
          <i className="fa-solid fa-caret-down"></i>
        ) : (
          <i className="fa-solid fa-caret-right"></i>
        )}
        How fast are integration shifts processed?
      </button>
      {faq[9] && (
        <p>
          Shift speeds vary from coin to coin and are based on the number of
          confirmations required. SideShift.ai is focused on decreasing shift
          times as much as possible. Integration exchange speeds are exactly the
          same as those experienced by users shifting directly with
          SideShift.ai.
        </p>
      )}
      <h1 className="faq_second_h1">Need help? Join the developer chat!</h1>
      <p>Chat with SideShift.ai engineers and third party developers.</p>
      <button className="faq_outline_btn">ENTER TELEGRAM</button>
      <p>Good job! 🎈</p>
    </article>
  );
}

export default Intgrat_Faq;
