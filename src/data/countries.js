import { getCountries, getCountryCallingCode } from "libphonenumber-js/min";

// English country names from the runtime — avoids hardcoding 250 entries.
// `Intl.DisplayNames` is supported in Node 18+ and all modern browsers.
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

export const COUNTRIES = getCountries()
  .map((iso) => {
    const name = regionNames.of(iso);
    return name
      ? { iso, name, dialCode: getCountryCallingCode(iso) }
      : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name));

export const DEFAULT_COUNTRY_ISO = "IN";
