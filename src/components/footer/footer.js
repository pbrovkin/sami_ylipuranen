import React from 'react'
import {Link} from "gatsby";

const footer = {
  width: '100%',
  height: '80px',
  backgroundColor: 'var(--black)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 20px',
};

const copyrightBlock = {
  width: '80%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
};

const copyright = {
  color: 'var(--white)',
  fontSize: '20px',
  width: '70%',
  display: 'flex',
  justifyContent: 'center',
};

const footerContainer = {
  width: '100%',
  display: 'flex'
};

const logoBlock = {
  width: '30%',
  display: 'flex',
  justifyContent: 'flex-end',
  
};

const logo = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'var(--blue)',
};

const Footer = () => {
  
  return (
      <footer style={footer}>
        <div className='container' style={footerContainer}>
          <div style={copyrightBlock}>
            <div style={copyright}>© Sami Ylipuranen C</div>
          </div>
          <div style={logoBlock}>
            <Link style={logo} to="/">
              Sami Ylipuranen
            </Link>
          </div>
        </div>
      </footer>
  )
};

export default Footer
