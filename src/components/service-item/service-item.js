import React from 'react'
import SignUpBtn from '../sign-up-btn/SignUpBtn'
import './service-item.css'

const ServiceItem = props => {
  return (
    <div className="service-div">
      <h3>{props.title}</h3>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
      <SignUpBtn />
    </div>
  )
}

export default ServiceItem
