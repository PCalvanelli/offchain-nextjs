import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Hero.module.css';
import { FiDownloadCloud } from 'react-icons/fi';
import WaitlistModal from '@/components/WaitlistModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

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


  const handleJoinWaitlistClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.hero}>
      <img className={styles.logo} src="/hippo_logo-removebg-preview.png" alt="Off Chain Logo" />
      <p className={styles.description}>
        Off Chain Data is a platform that collects and shares qualitative data on digital asset adoption.
      </p>
      <div className={styles.buttons}>
        <button className={styles.downloadButton} onClick={handleDownloadClick}>
          Download Sample Data <FiDownloadCloud className={styles.icon} />
        </button>
        <Link legacyBehavior href="https://peter-calvanelli.gitbook.io/off-chain-data/">
          <a className={styles.button}>Documentation</a>
        </Link>
        <button className={styles.button} onClick={handleJoinWaitlistClick}>Join API Waitlist</button>
      </div>
      {showModal && <WaitlistModal onClose={handleModalClose} />}
    </div>
  );
};

export default Hero;
