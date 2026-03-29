import PolicyContent from "@/components/sections/PolicyContent";

export const metadata = { title: "Privacy Policy - DahNAY" };

export default function PrivacyPolicyPage() {
  return (
    <div className="page page--policy">
      <PolicyContent title="Privacy Policy" lastUpdated="March 2026">
        <h2>Introduction</h2>
        <p>
          DahNAY Logistics (&quot;DahNAY&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Business information (company name, job title)</li>
          <li>Technical data (IP address, browser type, device information)</li>
          <li>Usage data (pages visited, time spent, referral source)</li>
          <li>Communication data (inquiries, feedback, correspondence)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain our services</li>
          <li>Respond to your inquiries and fulfil your requests</li>
          <li>Send administrative information and service updates</li>
          <li>Improve our website and user experience</li>
          <li>Comply with legal obligations and enforce our terms</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@dahnay.com">info@dahnay.com</a>.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@dahnay.com">info@dahnay.com</a>.
        </p>
      </PolicyContent>
    </div>
  );
}
