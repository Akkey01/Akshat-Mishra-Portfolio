// src/components/Projects/Projects.jsx
import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";

export default function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((proj, i) => {
          // Normalize field names
          const demoUrl = proj.demo || proj.Demo || "";
          const sourceUrl = proj.source || proj.Source || "";
          return (
            <div key={i} className={styles.card}>
              <img
                src={require(`../../assets/${proj.imageSrc}`)}
                alt={proj.title}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{proj.title}</h3>
              <p className={styles.cardDesc}>{proj.description}</p>
              <ul className={styles.skills}>
                {proj.skills.map((skill, j) => (
                  <li key={j} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className={styles.links}>
                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    Demo
                  </a>
                )}
                {sourceUrl && (
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                  >
                    Source
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
