import React from 'react'
import {Link} from "gatsby";
import Social from "../social";

const footer = {
  width: '100%',
  height: '80px',
  backgroundColor: 'var(--black)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 20px',
  // position: 'absolute',
  // left: '0',
  // bottom: '0',
  marginTop: '80px'
};

const copyrightBlock = {
  width: '33.33%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const socialBlock = {
  width: '33.33%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const copyright = {
  color: 'var(--white)',
  fontSize: '20px',
};

const footerContainer = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

const logoBlock = {
  width: '33.33%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
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
          <div style={socialBlock}>
            <Social />
          </div>
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
