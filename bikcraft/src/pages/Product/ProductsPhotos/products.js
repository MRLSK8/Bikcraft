import React from 'react';
import './products.css';

import passeio from '../../../assets/products/bikcraft-passeio-1.jpg';
import passeio2 from '../../../assets/products/bikcraft-passeio-2.jpg';
import iconePasseio from '../../../assets/products/passeio.svg';

import esporte from '../../../assets/products/bikcraft-esporte-1.jpg';
import esporte2 from '../../../assets/products/bikcraft-esporte-2.jpg';
import iconeEsporte from '../../../assets/products/esporte.svg';

export default function ProductsPhotos() {
  return (
    <div className='container'>
      <section className='passeio'>
        <div className='grid1'>
          <img src={passeio} alt='passeio' />
          <img className='icone' src={iconePasseio} alt='iconePasseio' />
        </div>
        <div className='grid2'>
          <img src={passeio2} alt='passeio' />
          <div className='product-info'>
            <p>
              O verdadeiro segredo da felicidade está em ter um genuíno
              interesse por todos os detalhes da vida cotidiana. Interesse por
              todos os detalhes da vida cotidiana.
            </p>
            <ul>
              <li>conforto</li>
              <li>velocidade</li>
              <li>design</li>
              <li>versatilidade</li>
            </ul>
          </div>
        </div>
        <h3 className='subtitle subtitle-sport'>Passeio</h3>
      </section>
      <section className='esporte'>
        <div className='grid1'>
          <img src={esporte} alt='passeio' />
          <img className='icone' src={iconeEsporte} alt='iconePasseio' />
        </div>
        <div className='grid2'>
          <img src={passeio2} alt='passeio' />
          <div className='product-info'>
            <p>
              O verdadeiro segredo da felicidade está em ter um genuíno
              interesse por todos os detalhes da vida cotidiana. Interesse por
              todos os detalhes da vida cotidiana.
            </p>
            <ul>
              <li>conforto</li>
              <li>velocidade</li>
              <li>design</li>
              <li>versatilidade</li>
            </ul>
          </div>
        </div>
        <h3 className='subtitle subtitle-sport'>Esporte</h3>
      </section>
      <section className='retro'>
        <div className='grid1'>
          <img src={esporte} alt='passeio' />
          <img className='icone' src={iconeEsporte} alt='iconePasseio' />
        </div>
        <div className='grid2'>
          <img src={passeio2} alt='passeio' />
          <div className='product-info'>
            <p>
              O verdadeiro segredo da felicidade está em ter um genuíno
              interesse por todos os detalhes da vida cotidiana. Interesse por
              todos os detalhes da vida cotidiana.
            </p>
            <ul>
              <li>conforto</li>
              <li>velocidade</li>
              <li>design</li>
              <li>versatilidade</li>
            </ul>
          </div>
        </div>
        <h3 className='subtitle subtitle-sport'>Retrô</h3>
      </section>
    </div>
  );
}
