import React from 'react';
import { Link } from 'react-router-dom';
import './introduction.css';

export default function Home() {
  return (
    <section className='introduction'>
      <div className='container'>
        <div className='quote-content'>
          <h1>Bicicletas feitas a mão</h1>
          <blockquote className='external-quote'>
            <p>
              "não tenha nada em sua casa que você não considere útil ou
              acredita ser bonito"
            </p>
            <cite>WILLIAM MORRIS</cite>
          </blockquote>
          <Link to='/products'>
            <button className='btn'>Orçamento</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
