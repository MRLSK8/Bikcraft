import React from 'react';
import './portfolioImages.css';
import { Link } from 'react-router-dom';

import retro from '../../../assets/portfolio/retro.jpg';
import passeio from '../../../assets/portfolio/passeio.jpg';
import esporte from '../../../assets/portfolio/esporte.jpg';

export default function Portfolio() {
  return (
    <section className='portfolio-images'>
      <div className='container'>
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
      </div>
    </section>
  );
}
