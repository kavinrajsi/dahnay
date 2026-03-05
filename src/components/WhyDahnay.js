import Image from "next/image";
import styles from "./WhyDahnay.module.css";

const cards = [
  {
    icon: "/images/icon-why-globe.svg",
    text: "Deep understanding of automotive supply chains",
  },
  {
    icon: "/images/icon-why-timer.svg",
    text: "Proven experience with time-sensitive and high-value cargo",
  },
  {
    icon: "/images/icon-why-compliance.svg",
    text: "Strong compliance and documentation capabilities",
  },
  {
    icon: "/images/icon-why-multimodal.svg",
    text: "Ability to manage multimodal movements seamlessly",
  },
];

export default function WhyDahnay() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Why DahNAY</h2>
      <div className={styles.cards}>
        {cards.map((card) => (
          <div key={card.text} className={styles.card}>
            <Image
              className={styles.cardIcon}
              src={card.icon}
              alt=""
              width={64}
              height={64}
            />
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
