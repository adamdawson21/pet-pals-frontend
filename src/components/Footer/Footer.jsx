import React from 'react';
import './Footer.css';


const Footer = () => {
return (
<footer className="Footer">
<p>&copy; {new Date().getFullYear()} PetPals. All rights reserved.</p>
</footer>
);
};


export default Footer;