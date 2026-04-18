"use client";

import { useState, useEffect, useRef } from "react";
import { isValidEmail, isValidMobile } from "@/lib/validators";
import SectionHeader from "./SectionHeader";

function getUTMParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ]) {
    const val = params.get(key);
    if (val) utms[key] = val;
  }
  return utms;
}

export default function GrowForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const referrer = useRef("");

  useEffect(() => {
    referrer.current = document.referrer || window.location.pathname;
  }, []);

  function validate(data) {
    const errs = {};
    if (!data.name.trim()) errs.name = "Name is required.";
    if (!data.email.trim()) {
      errs.email = "Email is required.";
    } else if (!isValidEmail(data.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!data.mobile.trim()) {
      errs.mobile = "Mobile number is required.";
    } else if (!isValidMobile(data.mobile)) {
      errs.mobile = "Enter a valid mobile number.";
    }
    return errs;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Honeypot check — if filled, silently reject (bot submission)
    if (formData.get("website")) {
      setStatus("success");
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      message: formData.get("message"),
      utm: getUTMParams(),
      previousPage: referrer.current,
      pageUrl: window.location.href,
    };

    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setErrors({});
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="grow-form">
      <div className="container grow-form__container">
        <div className="grow-form__left">
          <div className="grow-form__header">
            <SectionHeader
              tag="Reach us"
              title=" "
              titleAccent="Grow the Now"
              content="Wherever your business takes you, DahNAY is there to drive your success."
            />
          </div>
          <div className="grow-form__contact">
            <div className="grow-form__contact-icon">
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 24C2.175 24 1.46875 23.7063 0.88125 23.1188C0.29375 22.5312 0 21.825 0 21V3C0 2.175 0.29375 1.46875 0.88125 0.88125C1.46875 0.29375 2.175 0 3 0H27C27.825 0 28.5313 0.29375 29.1188 0.88125C29.7063 1.46875 30 2.175 30 3V21C30 21.825 29.7063 22.5312 29.1188 23.1188C28.5313 23.7063 27.825 24 27 24H3ZM15 13.5L3 6V21H27V6L15 13.5ZM15 10.5L27 3H3L15 10.5ZM3 6V3V21V6Z"
                  fill="#EF4130"
                />
              </svg>
            </div>
            <a href="mailto:info@dahnay.com" className="grow-form__contact-text">info@dahnay.com</a>
          </div>
        </div>
        <div className="grow-form__right">
          {status === "success" ? (
            <div className="grow-form__form grow-form__success">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="#FFF0EE" />
                <path
                  d="M20 32L28 40L44 24"
                  stroke="#EF4230"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="grow-form__success-title">Thank you!</h3>
              <p className="grow-form__success-text">
                Your inquiry has been submitted successfully. Our team will get
                back to you shortly.
              </p>
              <button
                type="button"
                className="button grow-form__submit"
                onClick={() => setStatus("idle")}
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form className="grow-form__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                }}
              />
              <div className="grow-form__fields">
                <div className="grow-form__field">
                  <label className="grow-form__label">
                    Name <span className="grow-form__required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`grow-form__input ${errors.name ? "grow-form__input--error" : ""}`}
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, name: undefined }))
                    }
                  />
                  {errors.name && (
                    <span className="grow-form__error">{errors.name}</span>
                  )}
                </div>
                <div className="grow-form__field">
                  <label className="grow-form__label">
                    Email Address <span className="grow-form__required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`grow-form__input ${errors.email ? "grow-form__input--error" : ""}`}
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, email: undefined }))
                    }
                  />
                  {errors.email && (
                    <span className="grow-form__error">{errors.email}</span>
                  )}
                </div>
                <div className="grow-form__field">
                  <label className="grow-form__label">
                    Mobile Number <span className="grow-form__required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    className={`grow-form__input ${errors.mobile ? "grow-form__input--error" : ""}`}
                    onChange={() =>
                      setErrors((prev) => ({ ...prev, mobile: undefined }))
                    }
                  />
                  {errors.mobile && (
                    <span className="grow-form__error">{errors.mobile}</span>
                  )}
                </div>
                <div className="grow-form__field">
                  <label className="grow-form__label">Message</label>
                  <textarea
                    name="message"
                    className="grow-form__textarea"
                    rows="4"
                  />
                </div>
              </div>
              {status === "error" && (
                <p className="grow-form__message grow-form__message--error">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                className="button grow-form__submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
