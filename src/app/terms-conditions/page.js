import PolicyContent from "@/components/sections/PolicyContent";

export const metadata = { title: "Terms & Conditions - DahNAY" };

export default function TermsConditionsPage() {
  return (
    <div className="page page--policy">
      <PolicyContent title="Terms & Conditions" lastUpdated="March 2026">
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing and using the DahNAY Logistics website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.
        </p>

        <h2>Services</h2>
        <p>
          DahNAY provides logistics, freight forwarding, customs clearance, and related supply chain services. All services are subject to specific agreements, quotations, and applicable terms provided at the time of engagement.
        </p>

        <h2>Use of Website</h2>
        <p>You agree to use our website only for lawful purposes and in a manner that does not:</p>
        <ul>
          <li>Infringe upon the rights of others</li>
          <li>Restrict or inhibit anyone else&apos;s use of the website</li>
          <li>Introduce malicious software or attempt unauthorised access</li>
          <li>Collect or harvest personal data without consent</li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and images, is the property of DahNAY Logistics and is protected by applicable intellectual property laws. Reproduction without prior written consent is prohibited.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          DahNAY shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services, except as required by applicable law.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, India.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions regarding these Terms, please contact us at <a href="mailto:info@dahnay.com">info@dahnay.com</a>.
        </p>
      </PolicyContent>
    </div>
  );
}
