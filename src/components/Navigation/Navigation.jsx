import React, { memo } from 'react';
import NAVBAR_DATA from '../../consts/navbarItems';
import './navigation.css';
import useGetWindowSize from '../../hooks/usaGetWindowSize';
import { Link } from 'react-scroll';

const Navigation = ({ isOpen, setIsOpen }) => {
  const { width } = useGetWindowSize();
  const isMobile = width <= 992;

  return (
    <div className="navbar-custom">
      {!isMobile && (
        <div className="web">
          {NAVBAR_DATA.map((item) => (
            <Link
              className="menu-item"
              to={item.link}
              key={item.number}
              smooth={true}
              offset={-120}
              duration={500}
            >
              <span>{item.number}</span>
              <h5>{item.name}</h5>
            </Link>
          ))}
        </div>
      )}
      {isOpen && isMobile && (
        <div className="mobile">
          {NAVBAR_DATA.map((item) => (
            <Link
              className="menu-item"
              to={item.link}
              key={item.number}
              smooth={true}
              offset={-120}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.number}</span>
              <h5>{item.name}</h5>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Navigation);
