"use client";

import React, { useEffect, useRef } from "react";
import styles from "./page.module.css";
import { About, Hero, Projects } from "./sections";

export default function Home() {
  // Parallex Effect
  const earthRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (earthRef.current) {
        earthRef.current.style.transform = `translateY(${-scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      {/* Parallex */}
      <div className={styles.earth}>
        <img src="/assets/image/ts.png" alt="Earth" ref={earthRef} />
      </div>
      {/*  */}
      <About />
      <Projects />
    </main>
  );
}
