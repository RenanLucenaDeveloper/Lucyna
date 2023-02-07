import React from 'react';

import whatsappSVG from '../img/whatsapp.svg';
import telegramSVG from '../img/telegram.svg';
import linkedinSVG from '../img/linkedin.svg';
import githubSVG from '../img/github.svg';

const Footer = () => {
  return (
    <footer>
      <h2>Everything Made By:</h2>
      <p>Renan Lucena dos Santos ©</p>
      <p id="email">ReenanDeveloper@hotmail.com</p>

      <h2 id="contact-title">Contact</h2>
      <div id="contact-container">
        <a href="https://wa.me/5511965683640" target="_blank" rel="noreferrer">
          <img src={whatsappSVG} alt="whatsapp button icon" />
        </a>
        <a href="https://t.me/reenanluceena" target="_blank" rel="noreferrer">
          <img src={telegramSVG} alt="telegram button icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/renan-lucena-811491214/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinSVG} alt="linkedin button icon" />
        </a>
        <a
          href="https://github.com/RenanLucenaDeveloper"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubSVG} alt="github button icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
