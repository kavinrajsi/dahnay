"use client";

import { useRef, useState, useEffect } from "react";

export default function HomeSupplyChain() {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const handleProgressClick = (e) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    video.currentTime = percent * video.duration;
  };

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
        <div className="home-supply-chain__video-wrapper">
          <video
            ref={videoRef}
            className="home-supply-chain__video"
            src="/video/about-video.mp4"
            poster="/video/about-video.png"
            autoPlay
            muted
            loop
            playsInline
          />
          <div
            className="home-supply-chain__progress"
            onClick={handleProgressClick}
          >
            <div className="home-supply-chain__progress-track" />
            <div
              className="home-supply-chain__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
