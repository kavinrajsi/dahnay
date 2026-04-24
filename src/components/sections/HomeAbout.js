"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function HomeAbout() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__inner">
          <div className="home-about__left">
            <span className="home-about__tag">WHO WE ARE</span>
            <h2 className="home-about__title">
              Twenty years. One purpose:{" "}
              <span className="home-about__title-accent">Growth</span>
            </h2>
            <p className="home-about__body">
              Built on trust and expertise, DahNAY empowers businesses with seamless logistics across borders and sectors.
            </p>
            <Link href="/about" className="button">
              Get to know us
            </Link>
          </div>
          <div className="home-about__right">
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
            <button
              type="button"
              className="home-about__mute"
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
