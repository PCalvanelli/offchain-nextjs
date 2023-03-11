import React from 'react';
import PropTypes from 'prop-types';

function Card({ icon, title, bulletPoints }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <ul>
        {bulletPoints.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;

