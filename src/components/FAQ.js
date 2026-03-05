"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.css";

const faqItems = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Eu aenean non orci adipiscing odio?",
    answer: "Lorem ipsum dolor sit amet consectetur. Eu aenean non orci adipiscing odio. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer: "Lorem ipsum dolor sit amet consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    question: "Eu aenean non orci adipiscing odio?",
    answer: "Eu aenean non orci adipiscing odio. Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis. Viverra libero quam fames vitae felis eu?",
    answer: "Lorem ipsum dolor sit amet consectetur. Senectus platea in nunc quis viverra libero quam fames vitae felis eu.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Eu aenean non orci adipiscing odio?",
    answer: "Lorem ipsum dolor sit amet consectetur. Eu aenean non orci adipiscing odio sed ut perspiciatis.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>FAQ&apos;S</span>
          </div>
          <h2 className={styles.heading}>
            Frequently Asked <span className={styles.headingAccent}>Questions</span>
          </h2>
        </div>
        <p className={styles.description}>
          Ensure every shipment is precise, on time and fully optimised with DahNAY&apos;s intelligent logistics network and real-time visibility
        </p>
      </div>

      <div className={styles.accordion}>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onClick={() => toggle(index)}
          >
            <div className={styles.itemHeader}>
              <p className={styles.itemQuestion}>{item.question}</p>
              <Image
                className={`${styles.itemToggle} ${openIndex === index ? styles.itemToggleOpen : ""}`}
                src="/images/icon-plus.svg"
                alt={openIndex === index ? "Collapse" : "Expand"}
                width={45}
                height={45}
              />
            </div>
            <div className={`${styles.itemAnswer} ${openIndex === index ? styles.itemAnswerOpen : ""}`}>
              <p className={styles.itemAnswerText}>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
