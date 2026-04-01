import Image from "next/image";

export default function HomeSupplyChain() {
  return (
    <section className="home-supply-chain">
      <div className="container">
        <div className="home-supply-chain__header">
          <div className="home-supply-chain__header-left">
            <span className="home-supply-chain__tag">What we offer</span>
            <h2 className="home-supply-chain__title">
              Simplify your supply chain with{" "}
              <span className="home-supply-chain__title-accent">DahNAY</span>
            </h2>
          </div>
          <p className="home-supply-chain__body">
            Comprehensive logistics solutions with a simplified supply chain, all focused on your growth. Whether it&apos;s transport, storage or strategy, every move is designed to accelerate what&apos;s next for your business.
          </p>
        </div>
        <div className="home-supply-chain__image-wrapper">
          <Image
            src="/images/home/supply-chain.png"
            alt="DahNAY supply chain"
            width={1120}
            height={600}
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="home-supply-chain__image"
          />
        </div>
      </div>
    </section>
  );
}
