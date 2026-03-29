import PolicyContent from "@/components/sections/PolicyContent";

export const metadata = { title: "POSH Policy - DahNAY" };

export default function POSHPolicyPage() {
  return (
    <div className="page page--policy">
      <PolicyContent title="Prevention of Sexual Harassment (POSH) Policy" lastUpdated="March 2026">
        <h2>Policy Statement</h2>
        <p>
          DahNAY Logistics is committed to providing a safe and secure working environment free from sexual harassment. This policy is in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.
        </p>

        <h2>Scope</h2>
        <p>
          This policy applies to all employees, contractors, consultants, trainees, and any individual associated with DahNAY, regardless of gender, at all workplaces including offices, client sites, and during business travel.
        </p>

        <h2>Definition of Sexual Harassment</h2>
        <p>Sexual harassment includes any unwelcome behaviour of a sexual nature, including but not limited to:</p>
        <ul>
          <li>Physical contact and advances</li>
          <li>Demand or request for sexual favours</li>
          <li>Making sexually coloured remarks</li>
          <li>Showing pornographic material</li>
          <li>Any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature</li>
        </ul>

        <h2>Internal Complaints Committee (ICC)</h2>
        <p>
          DahNAY has constituted an Internal Complaints Committee (ICC) in accordance with the Act. The ICC is responsible for receiving complaints, conducting inquiries, and recommending appropriate action.
        </p>

        <h2>Complaint Mechanism</h2>
        <p>
          Any employee who experiences or witnesses sexual harassment may file a complaint with the ICC within three months of the incident. Complaints can be made in writing or through email.
        </p>

        <h2>Confidentiality</h2>
        <p>
          All complaints and proceedings are treated with strict confidentiality. The identity of the complainant, respondent, and witnesses shall not be disclosed to the public.
        </p>

        <h2>Contact</h2>
        <p>
          To report an incident or for more information, please contact the ICC at <a href="mailto:icc@dahnay.com">icc@dahnay.com</a>.
        </p>
      </PolicyContent>
    </div>
  );
}
