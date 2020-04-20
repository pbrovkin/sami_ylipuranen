import React from 'react'

const btn = {
  minWidth: '40px',
  height: "40px",
  fontSize: '17px',
  color: 'var(--white)',
  backgroundColor: 'var(--black)',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  borderRadius: '5px'
};

const Button = ({ label }) => <button style={btn}>{label}</button>;

export default Button
