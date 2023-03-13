import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from '@/styles/WaitlistModal.module.css';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zgjfvxglyiydrytbhuwc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnamZ2eGdseWl5ZHJ5dGJodXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NzcyMTAsImV4cCI6MTk5NDA1MzIxMH0.WGZHEZGAA8YQ2oJikbmanrhJtScfZCNdUNQh0DzdRKU'

const supabase = createClient(supabaseUrl, supabaseKey)


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
      const { data, error } = await supabase.from('Waitlist').insert({ email });
      if (error) {
        throw new Error(error.message);
      }
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
