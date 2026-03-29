import SectionHeader from "./SectionHeader";

export default function WhatDrivesUs({ items = [] }) {
  return (
    <section className="what-drives-us">
      <div className="container">
        <SectionHeader
          tag="Why us"
          title="What drives us"
          content="The passion that drives DahNAY is the belief that movement can empower progress for people, partners and economies."
        />
        <div className="what-drives-us__grid">
          {items.map((item, index) => (
            <div key={index} className="what-drives-us__card">
              <div className="what-drives-us__icon">{item.icon}</div>
              <div className="what-drives-us__text">
                <h3 className="what-drives-us__title">{item.title}</h3>
                <p className="what-drives-us__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
