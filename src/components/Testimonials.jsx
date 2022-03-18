import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-container__left">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has you covered for all
            of your file storage needs. <br />
            Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required!
          </p>
          <a href="/#">
            See how Fylo works<i class="fa-solid fa-circle-arrow-right"></i>
          </a>
          <div className="flex-break" />
          <div className="testimonials-container__left__card">
            <i class="fas fa-quote-left"></i>
            <div className="testimonials-container__left__card__content">
              Fylo has improved our team productivity by an order of magnitude. Since making the
              switch our team has become a well-oiled collaboration machine.
            </div>
            <div className="testimonials-container__left__card__avatar">
              <figure>
                <img src="/images/avatar-testimonial.jpg" alt="avatar" />
                <figcaption>
                  <h3>Kyle Burton</h3>
                  <p>Founder & CEO, Huddle</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="testimonials-container__right">
          <img src="/images/illustration-2.svg" alt="illustration-2" />
        </div>
      </div>
    </div>
  );
}
