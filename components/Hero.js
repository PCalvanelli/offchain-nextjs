import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Hero.module.css';
import { FiDownloadCloud } from 'react-icons/fi';
import WaitlistModal from './WaitlistModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

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
      Off Chain Data is a platform that collects and shares qualitative data related to the adoption of digital assets.
      </p>
      <div className={styles.buttons}>
        <Link legacyBehavior href="/hippo_logo-removebg-preview.png" download>
          <a className={styles.downloadButton}>Download Sample Data <FiDownloadCloud className={styles.icon}/> </a>
        </Link>
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