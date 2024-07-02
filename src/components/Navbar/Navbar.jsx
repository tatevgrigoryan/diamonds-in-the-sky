import React, { memo } from 'react';
import NAVBAR_DATA from '../../consts/navbarItems';
import './navbar.css';
import useGetWindowSize from '../../hooks/usaGetWindowSize';

const Navbar = ({ isOpen }) => {
  const { width } = useGetWindowSize();
  const isMobile = width <= 992;

  return (
    <div className="navbar-custom">
      {!isMobile && (
        <div className="web">
          {NAVBAR_DATA.map((item) => (
            <a className="menu-item" href={item.link} key={item.number}>
              <span>{item.number}</span>
              <h5>{item.name}</h5>
            </a>
          ))}
        </div>
      )}
      {isOpen && isMobile && (
        <div className="mobile">
          {NAVBAR_DATA.map((item) => (
            <a className="menu-item" href={item.link} key={item.number}>
              <span>{item.number}</span>
              <h5>{item.name}</h5>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Navbar);
