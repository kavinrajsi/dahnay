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

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const referrer = useRef("");

  useEffect(() => {
    referrer.current = document.referrer || window.location.pathname;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot — bots tend to fill every field
    if (formData.website) {
      setStatus("success");
      return;
    }

    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
          utm: getUTMParams(),
          previousPage: referrer.current,
          pageUrl: window.location.href,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setErrors({});
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  height: 0,
                }}
              />
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="name">
                  Name *
                </label>
                <input
                  className={`contact-form__input${errors.name ? " contact-form__input--error" : ""}`}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <span id="contact-name-error" className="contact-form__error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  className={`contact-form__input${errors.email ? " contact-form__input--error" : ""}`}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <span id="contact-email-error" className="contact-form__error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor="mobile">
                  Mobile Number *
                </label>
                <input
                  className={`contact-form__input${errors.mobile ? " contact-form__input--error" : ""}`}
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.mobile)}
                  aria-describedby={errors.mobile ? "contact-mobile-error" : undefined}
                />
                {errors.mobile && (
                  <span id="contact-mobile-error" className="contact-form__error">
                    {errors.mobile}
                  </span>
                )}
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

              {status === "success" && (
                <p className="contact-form__success">
                  Thanks! We&rsquo;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="contact-form__error">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                className="contact-form__submit"
                type="submit"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
