import React from 'react'
import './Home.css'
import Header from '../Extra/Header'
import Footer from '../Extra/Footer'

const Home = () => {
  return (
      <div className="home">
        <div className="hero">
          <div className="top">
            <div className="btns">
              <h3>Pricing</h3>
              <h3>About</h3>
              <button>Sign In</button>
            </div>
          </div>
          <div className="down">
            <div className="content">
              <h1>GovBuzz</h1>
              <p>Connecting Government to Citizens</p>
            </div>
            <div className="start">
              <button>Get Started Free</button>
              <p>*no card needed</p>
            </div>
            <img src={require('../../Assets/Images/logo.png')} alt="" />
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Home