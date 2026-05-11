import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { getCountries, getCountryCallingCode } from "libphonenumber-js/min";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const countries = getCountries()
  .map((iso) => {
    const name = regionNames.of(iso);
    return name ? { iso, name, dialCode: getCountryCallingCode(iso) } : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.name.localeCompare(b.name));

const outPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "data",
  "countries.json",
);

writeFileSync(outPath, JSON.stringify(countries, null, 2) + "\n");
console.log(`Wrote ${countries.length} countries to ${outPath}`);
