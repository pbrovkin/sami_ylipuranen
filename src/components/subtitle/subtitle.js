import React from 'react'

const subTitle = {
  fontSize: '22px',
  color: 'var(--black)',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};



const Subtitle = ({ subtitle }) => {

  return <h3 style={subTitle}>{subtitle}</h3>

};

export default Subtitle
