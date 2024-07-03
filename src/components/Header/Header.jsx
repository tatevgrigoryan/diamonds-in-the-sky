import React, { useState } from 'react';
import Navbar from '../Navigation/Navigation';
import './header.css';
import useGetWindowSize from '../../hooks/usaGetWindowSize';

const Header = () => {
  const { width } = useGetWindowSize();
  const isMobile = width <= 992;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header row align-items-center">
      <div className="col-lg-6 col-12">
        <div className="row">
          <h4 className="col-6">Christal&Co</h4>
          {isMobile ? (
            <button onClick={handleClick} className="col-6 text-end">
              <img
                src={
                  isOpen
                    ? `${process.env.PUBLIC_URL}/images/close.svg`
                    : `${process.env.PUBLIC_URL}/images/hamburger.svg`
                }
                alt="hamburger"
              />
            </button>
          ) : null}
        </div>
      </div>
      <div className="custom-nav col-lg-6 col-12 text-end">
        <Navbar isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Header;
