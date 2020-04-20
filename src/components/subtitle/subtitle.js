import React from 'react'

const subTitle = {
  fontSize: '22px',
  color: 'var(--red)',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};



const Subtitle = ({ subtitle }) => {

  return <h3 style={subTitle}>{subtitle}</h3>

};

export default Subtitle
