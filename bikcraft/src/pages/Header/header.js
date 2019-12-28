import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/bikcraft.svg';
import './header.css';

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <nav className='nav-links'>
          <Link to='/'>
            <img src={Logo} alt='logo' />
          </Link>
          <ul>
            <li>
              <Link to='/'>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to='/product'>
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to='/portifolio'>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to='/contact-us'>
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
