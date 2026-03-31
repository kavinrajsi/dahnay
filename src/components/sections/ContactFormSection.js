"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-form-section">
      <div className=" container">
        <div className="contact-form-section__container">
          <div className="contact-form-section__left">
            <SectionHeader
              tag="FORMS"
              title="Let's grow the now,"
              titleAccent="together!"
            />
            <p className="contact-form-section__subtitle">
              Wherever your business takes you, DahNAY is there to drive your
              success.
            </p>

            <div className="contact-form-section__info">
              <div className="contact-form-section__info-row">
                <div className="contact-form-section__info-icon">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path
                      d="M3 24C2.175 24 1.46875 23.7063 0.88125 23.1188C0.29375 22.5312 0 21.825 0 21V3C0 2.175 0.29375 1.46875 0.88125 0.88125C1.46875 0.29375 2.175 0 3 0H27C27.825 0 28.5313 0.29375 29.1188 0.88125C29.7063 1.46875 30 2.175 30 3V21C30 21.825 29.7063 22.5312 29.1188 23.1188C28.5313 23.7063 27.825 24 27 24H3ZM15 13.5L3 6V21H27V6L15 13.5ZM15 10.5L27 3H3L15 10.5ZM3 6V3V21V6Z"
                      fill="#EF4130"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:info@dahnay.com"
                  className="contact-form-section__info-text"
                >
                  info@dahnay.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section__right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="name">
                  Name *
                </label>
                <input
                  className="contact-form__input"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  className="contact-form__input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="mobile">
                  Mobile Number *
                </label>
                <input
                  className="contact-form__input"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="contact-form__textarea"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button className="contact-form__submit" type="submit">
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
