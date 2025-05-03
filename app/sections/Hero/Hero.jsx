import React from "react";
import styles from "./hero.module.css";
import { Button } from "@/components/UI";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_content}>
        {/* Hero Button */}
        <button>
          <span>Hey, It's Abdelmoughite Naoumi</span>
        </button>

        {/* Career */}
        <div className={styles.career}>
          <div className="overflow-hidden">
            <h1>Cybersecurity and cloud</h1>
          </div>
          <div className="overflow-hidden">
            <h1>computing engineer.</h1>
          </div>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
};

export default Hero;
