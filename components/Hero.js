import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Hero.module.css';
import { FiDownloadCloud } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.logo} src="/hippo_logo-removebg-preview.png" alt="Off Chain Logo" />
      <p className={styles.description}>
        Off Chain Data is a open source repository for qualitative data on digital asset adoption
      </p>
      <div className={styles.buttons}>
        <Link legacyBehavior href="/sample.pdf">
          <a className={styles.downloadButton}>Download Sample<FiDownloadCloud className={styles.icon}/> </a>
        </Link>
        <Link legacyBehavior href="/documentation">
          <a className={styles.button}>Documentation</a>
        </Link>
        <Link legacyBehavior href="/waitlist">
          <a className={styles.button}>Join API Waitlist</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
