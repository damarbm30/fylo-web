import React from "react";
import "./Subscription.css";

export default function Subscription() {
  return (
    <div className="subscription">
      <div className="subscription-container">
        <div className="subscription-container__left">
          <h1>Get early access today </h1>
          <p>
            It only takes a minute to sign up and our free starter tier is extremely generous. If
            you have any questions, our support team would be happy to help you.
          </p>
        </div>
        <div className="subscription-container__right">
          <form className="subscription-container__right__form">
            <input type="text" name="email" placeholder="email@example.com" />
            <button>Get Started For Free</button>
          </form>
        </div>
      </div>
    </div>
  );
}
