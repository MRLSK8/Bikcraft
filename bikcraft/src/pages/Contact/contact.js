import React from 'react';
import Introduction from './Introduction/introduction';
import Form from './FormContact/formContact';
import './contact.css';
import mapa from '../../assets/endereco-bikcraft.jpg';
import facebook from '../../assets/social-media/facebook.svg';
import twitter from '../../assets/social-media/twitter.svg';
import instagram from '../../assets/social-media/instagram.svg';

export default function Contact() {
  return (
    <>
      <Introduction />
      <div className='container container-contact'>
        <div className='contact-content'>
          <Form />
          <div className='data-contact'>
            <h2>Dados</h2>
            <p>
              +55 21 99999-9999 <br /> orcamento@bikcraft.com <br />
              Rua Ali Perto - Botafogo
              <br />
              Rio de Janeiro - RJ - Brasil
            </p>
            <h2>Redes sociais</h2>
            <a
              href='https://www.facebook.com/profile.php?id=100004301021977'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img src={facebook} alt='facebook' />
            </a>
            <a
              href='https://twitter.com/MRLSK8'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img src={twitter} alt='twitter' />
            </a>
            <a
              href='https://www.instagram.com/mrlsk8/?hl=pt-br'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img src={instagram} alt='instagram' />
            </a>
          </div>
        </div>
        <img src={mapa} alt='mapa' />
      </div>
    </>
  );
}
