import React from 'react';

const Footer = () => {
 const currentYear = new Date().getFullYear();

 return (
    <div className='ln_footer'>
      <footer>
        <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
 );
}

export default Footer;
