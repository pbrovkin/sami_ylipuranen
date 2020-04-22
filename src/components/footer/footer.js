import React from 'react'
//import { Link } from "gatsby";
import Social from "../social";
import './footer.css'


const Footer = () => {

  return (
    <footer className='footer'>
      <div className='container footer-container'>
        <div className='social-block'>
          <Social />
        </div>
        <div className='copyright-block'>
          <div className='copyright'>© Sami Ylipuranen</div>
        </div>
      </div>
    </footer>
  )
};

export default Footer
