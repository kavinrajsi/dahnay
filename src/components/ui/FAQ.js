"use client";

import { useState } from "react";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`}>
      <button className="faq__question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <span className="faq__icon">
          {isOpen ? (
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="45" height="45" rx="22.5" fill="white"/>
              <path d="M28.0283 29.2854L23 24.2571L17.9717 29.2854L16.7146 28.0283L21.7429 23L16.7146 17.9717L17.9717 16.7146L23 21.7429L28.0283 16.7146L29.2854 17.9717L24.2571 23L29.2854 28.0283L28.0283 29.2854Z" fill="#EF4130"/>
            </svg>
          ) : (
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="45" height="45" rx="22.5" fill="white"/>
              <path d="M22.1111 31V23.8889H15V22.1111H22.1111V15H23.8889V22.1111H31V23.8889H23.8889V31H22.1111Z" fill="#EF4130"/>
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="faq__answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
