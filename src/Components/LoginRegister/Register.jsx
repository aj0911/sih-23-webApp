import React from 'react'
import './LoginRegister.css'
import Header from '../Extra/Header'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = (e)=>{
    e.preventDefault();
    navigate('/Admin');
}
  return (
    <>
      <Header/>
      <div className="wrapper">
          <h3 onClick={()=>navigate('/')}>GovBuzz</h3>
          <form onSubmit={(e)=>handleRegister(e)}>
              <div className="formControl">
                  <div className="label">
                      <img src={require('../../Assets/Images/user.png')} alt="" />
                      <h3>Full Name</h3>
                  </div>
                  <input type="text" />
              </div>
              <div className="formControl">
                  <div className="label">
                      <img src={require('../../Assets/Images/mail.png')} alt="" />
                      <h3>Email Address</h3>
                  </div>
                  <input type="text" />
              </div>
              <div className="formControl">
                  <div className="label">
                      <img src={require('../../Assets/Images/lock.png')} alt="" />
                      <h3>Password</h3>
                  </div>
                  <input type="password" />
              </div>
              <div className="btns" style={{justifyContent:'flex-end'}}>
                  <input type="submit" value={'Register'} />
              </div>
          </form>
      </div>
    </>
  )
}

export default Register