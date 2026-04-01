"use client";

import { useRef, useState } from "react";

export default function CareerApplyForm({ jobTitle }) {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    experience: "",
    location: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="career-apply-form" id="apply-form">
      <form onSubmit={handleSubmit}>
        <div className="career-apply-form__fields">
          {/* Resume upload */}
          <div
            className="career-apply-form__upload-area"
            onClick={() => fileInputRef.current?.click()}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".doc,.docx,.pdf,.rtf,.odt"
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
              This will auto-fill the fields below. 10MB max file size
              (Allowed file types are .doc, .pdf, .docx, .rtf, .odt).
            </p>
          </div>

          {/* Row 1 */}
          <div className="career-apply-form__row">
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-firstName">
                First Name <span className="career-apply-form__required">*</span>
              </label>
              <input
                className="career-apply-form__input"
                type="text"
                id="apply-firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-lastName">
                Last Name <span className="career-apply-form__required">*</span>
              </label>
              <input
                className="career-apply-form__input"
                type="text"
                id="apply-lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="career-apply-form__row">
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-email">
                Email Address <span className="career-apply-form__required">*</span>
              </label>
              <input
                className="career-apply-form__input"
                type="email"
                id="apply-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-mobile">
                Mobile Number <span className="career-apply-form__required">*</span>
              </label>
              <input
                className="career-apply-form__input"
                type="tel"
                id="apply-mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="career-apply-form__row">
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-experience">
                Experience <span className="career-apply-form__required">*</span>
              </label>
              <input
                className="career-apply-form__input"
                type="text"
                id="apply-experience"
                name="experience"
                placeholder="e.g. 3 years"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="career-apply-form__field">
              <label className="career-apply-form__label" htmlFor="apply-location">
                Current Location <span className="career-apply-form__required">*</span>
              </label>
              <input
                className="career-apply-form__input"
                type="text"
                id="apply-location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="career-apply-form__footer">
          <button className="career-apply-form__submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
