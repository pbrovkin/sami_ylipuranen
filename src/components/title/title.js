import React from 'react'

const sectionTitle = {
  fontSize: '28px',
  color: 'var(--white)',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  borderBottom: '2px solid var(--white)'
};


const Title = ({ title }) => {
  return <h2 style={sectionTitle}>{title}</h2>
};

export default Title
