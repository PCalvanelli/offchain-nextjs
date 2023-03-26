import Link from 'next/link';
import styles from '@/styles/NavBar.module.css';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

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

        {isAuthenticated ? (
          <a className={styles.logout} onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </a>
        ) : (
          <a className={styles.login} onClick={() => loginWithRedirect()}>
            Log In
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
