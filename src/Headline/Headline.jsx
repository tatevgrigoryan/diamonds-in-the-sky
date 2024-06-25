import React from 'react';
import PropTypes from 'prop-types';
import './headline.css';


const Heading = ({  title }) => {

    return (
        <h2 className="headline">
            {title}
        </h2>
    );
};

Heading.propTypes = {
    level: PropTypes.number,
    title: PropTypes.string,
    children: PropTypes.node,
};

Heading.defaultProps = {
    title: '',
};

export default Heading;
