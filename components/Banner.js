import { useState } from 'react';
import styles from '@/styles/Banner.module.css';
import { FaTimes, FaArrowRight, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

const Banner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className={styles.banner}>
          <div className={styles.bannerContainer}>
          <FaDiscord className={styles.discordIcon}/>
          <p>Join the Off Chain Discord Server!</p>
          <Link legacyBehavior href="https://discord.gg/pgRtSSncmh">
          <a className={styles.button}>Join now<FaArrowRight className={styles.buttonIcon}/></a>
          </Link>
          </div>
          <button className={styles.closeBtn} onClick={handleCloseBanner}>
            <FaTimes />
          </button>
        </div>
      )}
    </>
  );
};

export default Banner;
