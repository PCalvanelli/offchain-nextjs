import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>About Off Chain Data</h3>
            <p>Off Chain Data is a platform that collects and shares qualitative data related to the adoption of digital assets. Our open-source repository is a valuable resource for individuals and organizations looking to gain insights into how digital assets are being used and adopted across different industries and regions. By providing easy access to this data, we aim to support informed decision-making and drive innovation in the digital asset space.</p>
          </div>
          <div className={styles.column}>
            <h3>Resources</h3>
            <ul>
              <li><Link legacyBehavior href="/docs"><a>Documentation</a></Link></li>
              <li><Link legacyBehavior href="/faq"><a>FAQ</a></Link></li>
              <li><Link legacyBehavior href="/blog"><a>Blog</a></Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:info@offchaindata.io">info@offchaindata.io</a></li>
              <li><a href="https://twitter.com/offchaindata">Twitter</a></li>
              <li><a href="https://github.com/offchaindata">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2023 Off Chain Data</p>
      </div>
    </footer>
  );
};

export default Footer;
