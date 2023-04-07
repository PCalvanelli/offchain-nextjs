import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

function Card({ icon, title, bulletPoints }) {
  return (
    <div className="ui raised segment">
      <div className="ui teal inverted segment">
        <div className="header">
          {icon && <Icon name={icon} inverted />}
          {title}
        </div>
      </div>
      <div className="ui padded segment">
        <ul className="ui list">
          {bulletPoints.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.string,
};

export default Card;
