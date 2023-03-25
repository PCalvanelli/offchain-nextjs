import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import styles from '@/styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Link legacyBehavior href="/">
        <a className={styles.logo}>
          <img src="/hippo_logo-removebg-preview.png" alt="Logo" />
          <p className={styles.logoText}>Off Chain Data</p>
        </a>
      </Link>
      <div className={styles.links}>
        <a className={styles.link} href="https://peter-calvanelli.gitbook.io/off-chain-data/getting-started">
          Documentation
        </a>
        <Link legacyBehavior href="https://github.com/PCalvanelli/offchain-nextjs/issues">
          <a className={styles.link}>Contributing</a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

