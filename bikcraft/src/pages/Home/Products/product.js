import React from 'react';
import { Link } from 'react-router-dom';

import Esporte from '../../../assets/products/esporte.svg';
import Passeio from '../../../assets/products/passeio.svg';
import Retro from '../../../assets/products/retro.svg';

import './product.css';

export default function Products() {
  return (
    <section className='container'>
      <h2 className='subtitle'>Produtos</h2>
      <ul className='products-list'>
        <li>
          <img src={Esporte} alt='esporte' />
          <h3>Esporte</h3>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão.
          </p>
        </li>
        <li>
          <img src={Passeio} alt='passeio' />
          <h3>Passeio</h3>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão.
          </p>
        </li>
        <li>
          <img src={Retro} alt='retro' />
          <h3>Retrô</h3>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão.
          </p>
        </li>
      </ul>

      <div className="call-to-action">
        <p>Clique aqui e veja os detalhes dos produtos</p>
        <Link><button className='btn btn-black'>Produtos</button></Link>
      </div>
    </section>
  );
}
