import React from "react";
import styles from "./project.module.css";
import { Button } from "../UI";
import Link from "next/link";

const ProjectCard = ({ img, name, date, desc, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.inner_card}>
        <div className="overflow-hidden">
          <img src={img} alt={name} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={`${styles.title} flex justify-between items-center`}>
            <h2>{name}</h2>
            <p>{date}</p>
          </div>

          <p className={styles.desc}>
            {desc.length > 100 ? desc.slice(0, 90) + "..." : desc}
          </p>

          <Link
            href={link}
            className={styles.link}
            style={{
              color: "#8c00ff",
              padding: "0",
              backgroundColor: "transparent",
            }}
          >
            Browse on github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
