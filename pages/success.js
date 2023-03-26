import React from 'react';
import styles from '@/styles/Success.module.css';
import NavBar from '@/components/NavBar';

function Success() {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.title}>Thanks for signing up!</h1>
        <p className={styles.message}>
          You&apos;re all set. We&apos;ve sent a confirmation email to your inbox. Please
          click the link in the email to activate your account.
        </p>
      </div>
    </div>
  );
};

export default Success;
