// src/components/Summary/Summary.jsx
import React from 'react';
import styles from "./Summary.module.css";
import { getImageURL } from '../../utils';

export default function Summary() {
  return (
    <section className={styles.container} id="summary">
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Akshat Mishra</span>
        </h1>
        <h2 className={styles.headline}>
          Data Scientist | AI Product Developer | MS CE @NYU
        </h2>
        <p className={styles.summary}>
          Bridging the gap between data and impactful solutions!
        </p>
        <p className={styles.additional}>
          Actively pursuing Data Science/Software roles
        </p>
        <div className={styles.BtnsContainer}>
          <a
            className={styles.Btns}
            href="/Resume_Akshat_Mishra.pdf"
            download
          >
            View My Resume
          </a>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          className={styles.summaryImg}
          src={getImageURL("summary/Akshat_Mishra.jpg")}
          alt="Akshat Mishra"
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
