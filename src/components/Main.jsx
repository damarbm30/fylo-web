import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-container__left">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location. Access them wherever you
            need, share and collaborate with friends, family, and co-workers.
          </p>
          <form className="main-container__left__form">
            <input type="text" name="email" placeholder="email@example.com" />
            <button className="buttonTop">Get Started</button>
          </form>
        </div>
        <div className="main-container__right">
          <img src="/images/illustration-1.svg" alt="illustration-1" />
        </div>
      </div>
    </div>
  );
}
