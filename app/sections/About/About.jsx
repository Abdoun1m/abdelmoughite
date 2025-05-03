import React from "react";
import styles from "./about.module.css";
import { Button } from "@/components/UI";
import { motion } from "framer-motion";

const DURATION = 1.5; // Animation duration
const EASE = [0.6, -0.05, 0.01, 0.99]; // Animation easing

const About = () => {
  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: DURATION,
        ease: EASE,
      }}
    >
      <div className="flex justify-between gap-8">
        <div className={styles.image_div}>{/* <img src="" alt="" /> */}</div>

        <div className={styles.text_div}>
          <p>
            &bull; I'm a cybersecurity engineer passionate about solving complex
            problems in AI, cloud, and digital security. With expertise in
            ethical hacking, DevSecOps, and industrial cybersecurity, I build
            resilient, automated systems that protect modern enterprises. I've
            led projects in AI-driven risk mapping, digital identity, and ERP
            resilience for Industry 4.0. My work spans cloud security,
            penetration testing, and ERP integration—earning recognition like
            2nd place at GAIAFest Hackathon. I thrive on innovation,
            cross-functional collaboration, and applying tech to real-world
            impact.
          </p>
          {/* Social Button */}
          <Button
            path="https://www.linkedin.com/in/abdelmoughite-naoumi/"
            name="Reach me on LinkedIn"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
