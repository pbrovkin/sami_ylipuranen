import React from 'react'

const subTitle = {
  fontSize: '24px',
  color: 'var(--white)',
  textTransform: 'uppercase',
  fontWeight: 'bold'
};



const Subtitle = ({subtitle}) => {
  
  return <h3 style={subTitle}>{subtitle}</h3>
  
};

export default Subtitle
