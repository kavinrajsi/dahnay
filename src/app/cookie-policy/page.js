import PolicyContent from "@/components/sections/PolicyContent";

export const metadata = { title: "Cookie Policy - DahNAY" };

export default function CookiePolicyPage() {
  return (
    <div className="page page--policy">
      <PolicyContent title="Cookie Policy" lastUpdated="March 2026">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and improve your browsing experience.
        </p>

        <h2>How We Use Cookies</h2>
        <p>DahNAY uses cookies for the following purposes:</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly, including security and session management.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website, allowing us to improve content and user experience.</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.</li>
        </ul>

        <h2>Third-Party Cookies</h2>
        <p>
          We may use third-party services such as Google Analytics that place cookies on your device. These services have their own privacy policies governing the use of cookies.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Please note that disabling cookies may affect the functionality of our website.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about our use of cookies, please contact us at <a href="mailto:info@dahnay.com">info@dahnay.com</a>.
        </p>
      </PolicyContent>
    </div>
  );
}
