import React from 'react';
import Quotes from '../../ComponentsRepeated/quote';
import './quote.css';

export default function Quote() {
  return (
    <section className='quote'>
      <Quotes
        text='"o verdadeiro segredo da felicidade está em ter um genuíno
          interesse por todos os detalhes da vida cotidiana"'
      />
    </section>
  );
}
