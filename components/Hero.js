import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Hero.module.css';
import { FiDownloadCloud } from 'react-icons/fi';

const Hero = () => {
  const handleDownloadClick = async () => {
    const url = 'https://zgjfvxglyiydrytbhuwc.supabase.co/storage/v1/object/public/public/sample/demo-survey-sept-22.csv';
    const response = await fetch(url);
    const blob = await response.blob();
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className={styles.hero}>
      <img className={styles.logo} src="/hippo_logo-removebg-preview.png" alt="Off Chain Logo" />
      <p className={styles.description}>
        <span className={styles.brandName}>Off Chain Data</span> is a platform that collects and shares qualitative data on digital asset adoption.
      </p>
      <div className={styles.buttons}>
        <button className={styles.downloadButton} onClick={handleDownloadClick}>
          Download Sample Data <FiDownloadCloud className={styles.icon} />
        </button>
        <Link legacyBehavior href="/signup">
          <a className={styles.button}>Join API Waitlist</a>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
