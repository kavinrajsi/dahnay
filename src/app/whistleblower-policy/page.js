import PolicyContent from "@/components/sections/PolicyContent";

export const metadata = { title: "Whistleblower Policy - DahNAY" };

export default function WhistleblowerPolicyPage() {
  return (
    <div className="page page--policy">
      <PolicyContent title="Whistleblower Policy" lastUpdated="March 2026">
        <h2>Purpose</h2>
        <p>
          DahNAY Logistics is committed to maintaining the highest standards of ethical conduct and transparency. This Whistleblower Policy provides a mechanism for employees and stakeholders to report concerns about unethical behaviour, fraud, or violations of law without fear of retaliation.
        </p>

        <h2>Scope</h2>
        <p>
          This policy applies to all employees, directors, officers, contractors, vendors, and any individual associated with DahNAY who becomes aware of any misconduct or irregularity.
        </p>

        <h2>What Can Be Reported</h2>
        <ul>
          <li>Fraud, corruption, or financial irregularities</li>
          <li>Violation of company policies or code of conduct</li>
          <li>Breach of legal or regulatory requirements</li>
          <li>Misuse of company assets or resources</li>
          <li>Health, safety, or environmental violations</li>
          <li>Any act that endangers the interests of stakeholders</li>
        </ul>

        <h2>How to Report</h2>
        <p>
          Reports can be made confidentially through email or in writing. All reports will be treated with the utmost confidentiality and investigated promptly.
        </p>

        <h2>Protection Against Retaliation</h2>
        <p>
          DahNAY strictly prohibits retaliation against any person who makes a good-faith report under this policy. Any employee found to have retaliated against a whistleblower will be subject to disciplinary action.
        </p>

        <h2>Investigation Process</h2>
        <p>
          All reported concerns will be reviewed by the designated Ethics Committee. Investigations will be conducted fairly, objectively, and in a timely manner. The whistleblower will be informed of the outcome where appropriate.
        </p>

        <h2>Contact</h2>
        <p>
          To report a concern, please contact the Ethics Committee at <a href="mailto:ethics@dahnay.com">ethics@dahnay.com</a>.
        </p>
      </PolicyContent>
    </div>
  );
}
