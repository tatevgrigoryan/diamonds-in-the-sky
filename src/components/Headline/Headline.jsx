import React from 'react';
import PropTypes from 'prop-types';
import './headline.css';

let Heading = ({ title, attr }) => {
  return (
    <div className="heading row align-items-baseline">
      <h2 className="headline col-md-8 col-12">{title}</h2>
      <div className="attribute col-md-4 col-12 text-end">{attr}</div>
      <div className="line"></div>
    </div>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
  attr: PropTypes.node,
};

export default Heading;
