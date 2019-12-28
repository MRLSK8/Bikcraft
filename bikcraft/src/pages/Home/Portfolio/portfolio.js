import React from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

import retro from '../../../assets/portfolio/retro.jpg';
import passeio from '../../../assets/portfolio/passeio.jpg';
import esporte from '../../../assets/portfolio/esporte.jpg';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='container'>
        <h2 className='subtitle subtitle-portfolio'>Portfólio</h2>
        <ul className='portifolio-list'>
          <li>
            <img src={retro} alt='retro' />
          </li>
          <li>
            <img src={passeio} alt='passeio' />
          </li>
          <li>
            <img src={esporte} alt='esporte' />
          </li>
        </ul>
        <div className='call-to-action call-to-action-portfolio'>
          <p>Conheça mais o nosso portfólio</p>
          <Link to='/portfolio'>
            <button className='btn'>Produtos</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
