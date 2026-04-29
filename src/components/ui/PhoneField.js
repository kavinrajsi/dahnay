"use client";

import { useEffect, useMemo, useState } from "react";
import { parsePhoneNumberFromString, getCountryCallingCode } from "libphonenumber-js/min";
import { COUNTRIES, DEFAULT_COUNTRY_ISO } from "@/data/countries";

// Renders a country-code <select> + a number <input>. On change, emits a
// synthetic event { target: { name, value } } so existing form handlers can
// continue to use a single `mobile` field. Value is E.164 ("+919876543210").
export default function PhoneField({
  id,
  name = "mobile",
  value = "",
  onChange,
  placeholder = "Mobile number",
  required = false,
  ariaInvalid,
  disabled = false,
  inputClassName = "",
  selectClassName = "",
}) {
  const [iso, setIso] = useState(() => deriveIso(value) || DEFAULT_COUNTRY_ISO);
  const [national, setNational] = useState(() => deriveNational(value));

  // Sync internal state when the parent resets `value` (e.g. after submit).
  useEffect(() => {
    if (!value) {
      setNational("");
      return;
    }
    const parsed = parsePhoneNumberFromString(value);
    if (parsed) {
      setIso(parsed.country || iso);
      setNational(parsed.nationalNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const dialCode = useMemo(() => getCountryCallingCode(iso), [iso]);

  const e164 = useMemo(() => {
    const digits = national.replace(/\D/g, "");
    return digits ? `+${dialCode}${digits}` : "";
  }, [dialCode, national]);

  function emit(nextIso, nextNational) {
    const digits = nextNational.replace(/\D/g, "");
    const code = getCountryCallingCode(nextIso);
    const next = digits ? `+${code}${digits}` : "";
    onChange?.({ target: { name, value: next } });
  }

  return (
    <div className="phone-field">
      <select
        className={`phone-field__country ${selectClassName}`.trim()}
        value={iso}
        onChange={(e) => {
          setIso(e.target.value);
          emit(e.target.value, national);
        }}
        disabled={disabled}
        aria-label="Country"
      >
        {COUNTRIES.map((c) => (
          <option key={c.iso} value={c.iso}>
            {c.name} (+{c.dialCode})
          </option>
        ))}
      </select>
      <span className="phone-field__dial-code" aria-hidden="true">
        +{dialCode}
      </span>
      <input
        type="tel"
        id={id}
        className={`phone-field__number ${inputClassName}`.trim()}
        value={national}
        onChange={(e) => {
          const next = e.target.value.replace(/\D/g, "");
          setNational(next);
          emit(iso, next);
        }}
        placeholder={placeholder}
        required={required}
        aria-invalid={ariaInvalid}
        disabled={disabled}
        inputMode="numeric"
        autoComplete="tel-national"
      />
      {/* Hidden input lets uncontrolled forms (FormData.get) read E.164. */}
      <input type="hidden" name={name} value={e164} />
    </div>
  );
}

function deriveIso(value) {
  const parsed = parsePhoneNumberFromString(String(value || ""));
  return parsed?.country || null;
}

function deriveNational(value) {
  const parsed = parsePhoneNumberFromString(String(value || ""));
  return parsed?.nationalNumber || "";
}
