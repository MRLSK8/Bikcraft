import React from 'react';

import facebook from '../../assets/social-media/facebook.svg';
import instagram from '../../assets/social-media/instagram.svg';
import twitter from '../../assets/social-media/twitter.svg';

import './footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-info'>
          <ul>
            <li>
              <h3 className='subtitle subtitle-footer'>Nossa história</h3>
              <p>
                O verdadeiro segredo da felicidade está em ter um genuíno
                interesse por todos os detalhes da vida cotidiana. Interesse por
                todos os detalhes da vida cotidiana.
              </p>
            </li>
            <li>
              <h3 className='subtitle subtitle-footer'>Contato</h3>
              <p>
                - 21 9999-9999
                <br />- contato@bikcraft.com
                <br />- Botafogo - RJ
              </p>
            </li>
            <li>
              <h3 className='subtitle subtitle-footer'>Redes sociais</h3>
              <div className='social-medias'>
                <ul>
                  <li>
                    <a
                      href='https://www.facebook.com/profile.php?id=100004301021977'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={facebook} alt='facebook' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://twitter.com/MRLSK8'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={twitter} alt='twiter' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/mrlsk8/?hl=pt-br'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={instagram} alt='instagram' />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <footer className='footerCopyright'>
        <div className='container footer-copyright'>
          &copy;Bikcraft 2019 - Alguns direitos reservados.
        </div>
      </footer>
    </footer>
  );
}
