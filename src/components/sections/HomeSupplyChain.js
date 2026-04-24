"use client";

import { useRef, useState, useEffect } from "react";

export default function HomeSupplyChain() {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(true);

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

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
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
            src="/video/about-intro.mp4"
            poster="/video/about-intro.png"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="home-supply-chain__controls">
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
            <button
              type="button"
              className="home-supply-chain__mute"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              aria-pressed={!muted}
            >
              {muted ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
