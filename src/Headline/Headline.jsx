import React from 'react';
import PropTypes from 'prop-types';
import './headline.css';


const Heading = ({  title }) => {

    return (
       <div className="heading">
           <div className="container">
               <h2 className="headline">
                   {title}
               </h2>
           </div>
           <div className="line">

           </div>
       </div>
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
