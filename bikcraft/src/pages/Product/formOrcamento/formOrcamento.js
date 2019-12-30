import React from 'react';
import Form from '../../ComponentsRepeated/form';
import './formOrcamento.css';

export default function formOrcamento() {
  return (
    <section className='orcamento'>
      <div className='container'>
        <h3 className='subtitle subtitle-orcamento'>Orçamento</h3>
        <div className='orcamento-content'>
          <Form />
          <div className='orcamento-dados'>
            <h2>Dados</h2>
            <p>
              +55 21 99999-9999 <br /> orcamento@bikcraft.com
            </p>
            <h2>Monte a sua Bikcraft</h2>
            <p id='escolha-esp'>Escolha as especificações</p>
            <ul>
              <li>- Cores</li>
              <li>- Estilo</li>
              <li>- Acesórios</li>
              <li>- Medidas</li>
              <li>- E Outros</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
