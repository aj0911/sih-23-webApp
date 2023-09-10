import React from 'react'
import './Extra.css'
import { useNavigate } from 'react-router-dom'

const Header = ({isLoggedIn=false,photoClick}) => {
    const navigate = useNavigate();
  return (
    <header>
        <div className="logo" onClick={()=>navigate('/')}>
            <img src={require('../../Assets/Images/logo-remove.png')} alt="" />
            <h3>GovBuzz</h3>
        </div>
        <div className="btns">
            {
                (isLoggedIn)?
                <>
                    <button className='pro'>Pro plan</button>
                    <img src={require('../../Assets/Images/avatar.png')} alt="" onClick={photoClick} />
                </>:
                <button onClick={()=>navigate('/Login')}>Sign In</button>
            }
        </div>
    </header>
  )
}

export default Header