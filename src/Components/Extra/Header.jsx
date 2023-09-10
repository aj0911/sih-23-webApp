import React from 'react'
import './Extra.css'
import { Link } from 'react-router-dom'

const Header = ({isLoggedIn=false}) => {
  return (
    <header>
        <div className="logo">
            <img src={require('../../Assets/Images/logo-remove.png')} alt="" />
            <h3>GovBuzz</h3>
        </div>
        <div className="btns">
            {
                (isLoggedIn)?
                <>
                    <button className='pro'>Pro plan</button>
                    <img src={require('../../Assets/Images/avatar.png')} alt="" />
                </>:
                <button>Sign In</button>
            }
        </div>
    </header>
  )
}

export default Header