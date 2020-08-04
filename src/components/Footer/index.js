import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>

      <p>
        Desenvolvido durante a Imersão React
        {/* {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a> */}
      </p>
      
      <p>     
        {' '}
        <a href="https://github.com/michaelyves/">
          Michael Yves Klynsman
        </a>
      </p>
      
    </FooterBase>
  );
}

export default Footer;
