import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='social-icons'>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} size='lg' />
        </a>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} size='lg' />
        </a>
        <a
          href='https://www.facebook.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faFacebook} size='lg' />
        </a>
      </div>
      <div className='footer-text'>
        &copy; {new Date().getFullYear()} PetPals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
