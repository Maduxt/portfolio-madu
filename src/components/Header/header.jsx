import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3 as MenuIcon } from 'react-icons/hi2';
import { IoIosClose as CloseIcon } from "react-icons/io";
import Logo from '../../fragments/Logo/logo';
import './header.css';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Logo />
        </div>
        <nav className={`nav ${isExpanded ? 'expanded' : ''}`}>
          <ul className='listHeader'>
            <li><Link className='link' to='/'>INICIO</Link></li>
            <li><Link className='link' to='/projetos'>PROJETOS</Link></li>
            <li><Link className='link' to='/contato'>CONTATO</Link></li>
          </ul>
        </nav>
        <button className="toggle-button" onClick={toggleExpansion}>
          {isExpanded ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;

