import React from 'react'

const subTitle = {
  fontSize: '1.2rem',
  color: 'var(--green)',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};



const Subtitle = ({ subtitle }) => {

  return <h3 style={subTitle}>{subtitle}</h3>

};

export default Subtitle
