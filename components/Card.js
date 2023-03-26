import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/Card.module.css';

function Card({ icon, title, bulletPoints }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardIcon}>{icon}</div>
        <div>
          <h3>{title}</h3>
          <ul>
            {bulletPoints.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
