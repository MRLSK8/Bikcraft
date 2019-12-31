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
              <Link to='/about-us'>
                <span>About us</span>
              </Link>
            </li>
            <li>
              <Link to='/product'>
                <span>Product</span>
              </Link>
            </li>
            <li>
              <Link to='/portfolio'>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
