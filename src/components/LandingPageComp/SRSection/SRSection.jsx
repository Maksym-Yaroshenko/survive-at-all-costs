// src/components/LandingPageComp/SRSection/SRSection.jsx

import React from 'react';
import styles from './SRSection.module.css';
import '../../../index.css';

export const SRSection = () => {
  return (
    <section className={`${styles.srSection} section`}>
      <div className={`${styles.srContainer} container`}>
        <p>Can My Computer Run this game?</p>
        <h2>system requirements</h2>
        <div className={styles.systemRequirements}>
          <div className={requirement}>
            <h3>OS:</h3>
            <p>Windows 7 64-bit only (No OSX support at this time)</p>
          </div>
          <div className={requirement}>
            <h3>PROCESSOR:</h3>
            <p>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
          </div>
          <div className={requirement}>
            <h3>MEMORY:</h3>
            <p>8 GB RAM</p>
          </div>
          <div className={requirement}>
            <h3>STORAGE:</h3>
            <p>8 GB available space</p>
          </div>
          <div className={requirement}>
            <h3>GRAPHICS:</h3>
            <p>NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
