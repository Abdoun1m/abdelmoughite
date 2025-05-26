import ProjectCard from "@/components/UI/ProjectCard/ProjectCard";
import { ProjectsData } from "@/constants/data";
import { motion } from "framer-motion";
import styles from "./project.module.css";

const DURATION = 1.5; // Animation duration
const EASE = [0.6, -0.05, 0.01, 0.99]; // Animation easing

const Projects = () => {
  return (
    <motion.section
      className={styles.projects}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: DURATION,
        ease: EASE,
      }}
    >
      <div className={styles.head_intro}>
        <h1>Featured Projects</h1>
      </div>

      {/* Project Card */}
      <div className={styles.project_grid}>
        {ProjectsData.map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
