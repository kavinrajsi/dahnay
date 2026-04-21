"use client";

import { useEffect, useRef, useState } from "react";
import { isValidEmail, isValidMobile } from "@/lib/validators";
import { getUTMParams } from "@/lib/utm";

const MAX_FILE_BYTES = 15 * 1024 * 1024; // 15MB

export default function CareerApplyForm({ jobTitle }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [resumeFile, setResumeFile] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    experience: "",
    location: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const referrer = useRef("");

  useEffect(() => {
    referrer.current = document.referrer || window.location.pathname;
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setErrors((prev) => ({ ...prev, resume: "Only .pdf files are allowed." }));
      setFileName("");
      setResumeFile(null);
      return;
    }
    if (file.size > MAX_FILE_BYTES) {
      setErrors((prev) => ({ ...prev, resume: "File must be 15MB or smaller." }));
      setFileName("");
      setResumeFile(null);
      return;
    }

    setFileName(file.name);
    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: undefined }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  function validate(data, file) {
    const errs = {};
    if (!file) errs.resume = "Resume is required.";
    if (!data.firstName.trim()) errs.firstName = "First name is required.";
    if (!data.lastName.trim()) errs.lastName = "Last name is required.";
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
    if (!data.experience.trim()) errs.experience = "Experience is required.";
    if (!data.location.trim()) errs.location = "Current location is required.";
    return errs;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(formData, resumeFile);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    const body = new FormData();
    body.append("firstName", formData.firstName);
    body.append("lastName", formData.lastName);
    body.append("email", formData.email);
    body.append("mobile", formData.mobile);
    body.append("experience", formData.experience);
    body.append("location", formData.location);
    body.append("resume", resumeFile);
    if (jobTitle) body.append("jobTitle", jobTitle);
    body.append("utm", JSON.stringify(getUTMParams()));
    body.append("previousPage", referrer.current);
    body.append("pageUrl", window.location.href);

    try {
      const res = await fetch("/api/career-apply", {
        method: "POST",
        body,
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          experience: "",
          location: "",
        });
        setFileName("");
        setResumeFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="career-apply-form" id="apply-form">
      <form onSubmit={handleSubmit} noValidate>
        <div className="career-apply-form__fields">
          {/* Resume upload */}
          <div
            className={`career-apply-form__upload-area${errors.resume ? " career-apply-form__upload-area--error" : ""}`}
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              className="career-apply-form__upload-input"
              onChange={handleFileChange}
            />
            <p className="career-apply-form__upload-label">
              {fileName || (
                <>
                  Upload Resume{" "}
                  <span className="career-apply-form__required">*</span>
                </>
              )}
            </p>
            <p className="career-apply-form__upload-hint">
              This will auto-fill the fields below. 15MB max file size
              (Only .pdf files are allowed).
            </p>
          </div>
          {errors.resume && (
            <span className="career-apply-form__error">{errors.resume}</span>
          )}

          {/* Row 1 */}
          <div className="career-apply-form__row">
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-firstName">
                First Name <span className="career-apply-form__required">*</span>
              </label>
              <input
                className={`career-apply-form__input${errors.firstName ? " career-apply-form__input--error" : ""}`}
                type="text"
                id="apply-firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={errors.firstName ? "apply-firstName-error" : undefined}
              />
              {errors.firstName && (
                <span id="apply-firstName-error" className="career-apply-form__error">
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-lastName">
                Last Name <span className="career-apply-form__required">*</span>
              </label>
              <input
                className={`career-apply-form__input${errors.lastName ? " career-apply-form__input--error" : ""}`}
                type="text"
                id="apply-lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={errors.lastName ? "apply-lastName-error" : undefined}
              />
              {errors.lastName && (
                <span id="apply-lastName-error" className="career-apply-form__error">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="career-apply-form__row">
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-email">
                Email Address <span className="career-apply-form__required">*</span>
              </label>
              <input
                className={`career-apply-form__input${errors.email ? " career-apply-form__input--error" : ""}`}
                type="email"
                id="apply-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "apply-email-error" : undefined}
              />
              {errors.email && (
                <span id="apply-email-error" className="career-apply-form__error">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-mobile">
                Mobile Number <span className="career-apply-form__required">*</span>
              </label>
              <input
                className={`career-apply-form__input${errors.mobile ? " career-apply-form__input--error" : ""}`}
                type="tel"
                id="apply-mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                aria-invalid={Boolean(errors.mobile)}
                aria-describedby={errors.mobile ? "apply-mobile-error" : undefined}
              />
              {errors.mobile && (
                <span id="apply-mobile-error" className="career-apply-form__error">
                  {errors.mobile}
                </span>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="career-apply-form__row">
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-experience">
                Experience <span className="career-apply-form__required">*</span>
              </label>
              <input
                className={`career-apply-form__input${errors.experience ? " career-apply-form__input--error" : ""}`}
                type="text"
                id="apply-experience"
                name="experience"
                placeholder="e.g. 3 years"
                value={formData.experience}
                onChange={handleChange}
                aria-invalid={Boolean(errors.experience)}
                aria-describedby={errors.experience ? "apply-experience-error" : undefined}
              />
              {errors.experience && (
                <span id="apply-experience-error" className="career-apply-form__error">
                  {errors.experience}
                </span>
              )}
            </div>
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-location">
                Current Location <span className="career-apply-form__required">*</span>
              </label>
              <input
                className={`career-apply-form__input${errors.location ? " career-apply-form__input--error" : ""}`}
                type="text"
                id="apply-location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                aria-invalid={Boolean(errors.location)}
                aria-describedby={errors.location ? "apply-location-error" : undefined}
              />
              {errors.location && (
                <span id="apply-location-error" className="career-apply-form__error">
                  {errors.location}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="career-apply-form__footer">
          {status === "success" && (
            <p className="career-apply-form__success">
              Thanks! Your application has been submitted. We&rsquo;ll be in touch shortly.
            </p>
          )}
          {status === "error" && (
            <p className="career-apply-form__error">
              Something went wrong. Please try again.
            </p>
          )}
          <button
            className="career-apply-form__submit"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
