import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '@/styles/WaitlistModal.module.css';

const WaitlistModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.endsWith('@gmail.com')) {
      setFormError(true);
      return;
    }
    try {
      // make API call to submit form data here
      console.log(`Submitting email ${email} to API`);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setFormError(true);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {success ? (
          <div className={styles.successMessage}>
            <h2>Thank you for signing up!</h2>
            <p>We will notify you when the Off Chain API is available.</p>
          </div>
        ) : (
          <>
            <div className={styles.closeButton} onClick={onClose}>
              <FaTimes />
            </div>
            <h2>Join Waitlist</h2>
            <p>Enter your email to join the waitlist for the Off Chain API.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input type="email" id="email" name="email" value={email} onChange={handleChange} required placeholder='satoshi@bicoin.com'/>
              </div>
              {formError && (
                <div className={styles.errorMessage}>Please try again. Submit your work email or company email address.</div>
              )}
              <div className={styles.submitButton}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
