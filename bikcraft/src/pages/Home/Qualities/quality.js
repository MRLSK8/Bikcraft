import React from 'react';
import './quality.css';
import bikcraftQualidade from '../../../assets/bikcraft-qualidade.svg';
import { Link } from 'react-router-dom';

export default function Qualities() {
  return (
    <section className='container quality'>
      <h2 className='subtitle subtitle-qualities'>Qualidades</h2>
      <img src={bikcraftQualidade} alt='bikcraftQualidade' />
      <ul className='quality-list'>
        <li>
          <h3 className='subtitle lower'>Durabilidade</h3>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem
          </p>
        </li>
        <li>
          <h3 className='subtitle lower'>Design</h3>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem
          </p>
        </li>
        <li>
          <h3 className='subtitle lower'>Sustentabilidade</h3>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem
          </p>
        </li>
      </ul>
      
      <div className="call-to-action call-to-action-quality">
        <p>Conheça mais a história da bikcraft</p>
        <Link to='/about'><button className='btn btn-black'>Sobre</button></Link>
      </div>
    </section>
  );
}
