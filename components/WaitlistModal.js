import React from 'react';
import styles from '@/styles/WaitlistModal.module.css';

const WaitlistModal = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        for (let entry of formData.entries()) {
          data[entry[0]] = entry[1];
        }
        console.log(data);
      };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Join Waitlist</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <button type="submit">Submit</button>
        </form>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default WaitlistModal;
