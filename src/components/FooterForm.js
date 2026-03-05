import Image from "next/image";
import styles from "./FooterForm.module.css";

export default function FooterForm() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>FORMS</span>
          </div>
          <div className={styles.headingGroup}>
            <h2 className={styles.heading}>
              Let&apos;s grow the now,{" "}
              <span className={styles.headingAccent}>
                <br />
                together!
              </span>
            </h2>
            <p className={styles.description}>
              Wherever your business takes you, DahNAY is there to drive your success.
            </p>
          </div>
        </div>

        <div className={styles.contactItems}>
          <div className={styles.contactItem}>
            <Image
              className={styles.contactIcon}
              src="/images/icon-email.svg"
              alt="Email"
              width={56}
              height={56}
            />
            <div className={styles.contactText}>
              <p className={styles.contactLabel}>E-Mail</p>
              <p className={styles.contactValue}>Dahnaylogistics@gmail.com</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <Image
              className={styles.contactIcon}
              src="/images/icon-phone.svg"
              alt="Phone"
              width={56}
              height={56}
            />
            <div className={styles.contactText}>
              <p className={styles.contactLabel}>Phone number</p>
              <p className={styles.contactValue}>+91-9841-77-0000</p>
            </div>
          </div>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label className={styles.label}>
              Name <span className={styles.required}>*</span>
            </label>
            <input className={styles.input} type="text" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              Email Address <span className={styles.required}>*</span>
            </label>
            <input className={styles.input} type="email" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>
              Mobile Number <span className={styles.required}>*</span>
            </label>
            <input className={styles.input} type="tel" required />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Message</label>
            <textarea className={styles.textarea} />
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Submit inquiry
        </button>
      </form>
    </section>
  );
}
