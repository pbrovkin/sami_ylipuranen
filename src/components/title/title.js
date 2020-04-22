import React from 'react'

const sectionTitle = {
  fontSize: '1.75rem',
  color: 'var(--black)',
  textTransform: 'uppercase',
  fontWeight: 'bold',
};


const Title = ({ title }) => {
  return <h2 style={sectionTitle}>{title}</h2>
};

export default Title
