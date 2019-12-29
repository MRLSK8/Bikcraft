import React from 'react';
import './content.css';
import equipe from '../../../assets/equipe-bikcraft.jpg';

export default function Content() {
  return (
    <div className='container'>
      <div className='container about-content'>
        <div className='history'>
          <h3 className='subtitle subtitle-content'>
            História, Missão e Visão
          </h3>
          <p>
            O verdadeiro segredo da felicidade está em ter um genuíno interesse
            por todos os detalhes da vida cotidiana. Interesse por todos os
            detalhes da vida cotidiana.
          </p>
          <p>
            O verdadeiro segredo da felicidade está em ter um genuíno. interesse
            por todos os detalhes da vida cotidiana. Interesse por todos os
            detalhes da vida cotidiana.
          </p>
        </div>
        <div className='values'>
          <h3 className='subtitle subtitle-content'>Valores</h3>
          <p>
            - Qualidade no processo com
            <br />
            - Foco no cliente sem perder a<br />
            - Diversão, preservando a<br />- Natureza com sustentabilidade
          </p>
        </div>
      </div>
      <img src={equipe} alt='' />
    </div>
  );
}
