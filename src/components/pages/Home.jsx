import React from "react";
import "../../App.css";
import Main from "../Main";
import Footer from "../Footer";
import Subscription from "../Subscription";
import Testimonials from "../Testimonials";

export default function Home() {
  return (
    <>
      <div className="section">
        <Main />
        <Testimonials />
        <Subscription />
        <Footer />
      </div>
    </>
  );
}
