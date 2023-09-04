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
      <div className='badge-icons top-right'>
        {/* Add fake badges and awards icons here */}
<<<<<<< HEAD
        <span className='badge'>
          <img
            src='https://png.pngtree.com/png-vector/20221005/ourmid/pngtree-number-1-golden-ribbon-badge-design-png-image_6278756.png'
            alt='Gold Badge'
          />
        </span>
        <span className='badge'>
          <img
            src='https://freepngimg.com/save/26978-award-clipart/420x420'
            alt='New Badge'
          />
        </span>
      </div>

      <div className='newsletter'>
        <h3>Subscribe to Our Newsletter</h3>
        <form>
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            required
          />
          <button type='submit'>Subscribe</button>
        </form>
=======
       <span className='badge'>
          <img src='https://png.pngtree.com/png-vector/20221005/ourmid/pngtree-number-1-golden-ribbon-badge-design-png-image_6278756.png' alt='Gold Badge'/>
        </span>
        <span className='badge'>
      <img src='https://freepngimg.com/save/26978-award-clipart/420x420' alt='New Badge' />
    </span>
      </div>
          
      <div className='newsletter'>
      <h3>Subscribe to Our Newsletter</h3>
      <form>
        <input
          type='email'
          placeholder='Enter your email'
          name='email'
          required
        />
        <button type='submit'>Subscribe</button>
      </form>
>>>>>>> 39308b1e7576af6cd9f932550ee942d13113a0ba
      </div>
    </footer>
  );
};
export default Footer;
