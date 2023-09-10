import React from 'react'
import './Extra.css'

const Footer = () => {
  return (
    <footer>
      <h3>Register</h3>  
      <h3>Terms & Condition</h3>  
      <h3>Privacy Policy</h3>  
      <h3>Documentation</h3>  
      <h3>Pricing</h3>  
      <h3>Our blog</h3>
      <div className="logo">
        <img src={require('../../Assets/Images/logo-remove.png')} alt="" />
        <h3>GovBuzz</h3>
      </div>  
    </footer>
  )
}

export default Footer