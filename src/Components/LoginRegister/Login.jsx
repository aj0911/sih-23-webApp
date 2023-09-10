import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginRegister.css'

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault();
        navigate('/Admin');
    }

  return (
    <div className="wrapper">
        <h3 onClick={()=>navigate('/')}>GovBuzz</h3>
        <form onSubmit={(e)=>handleLogin(e)}>
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
            <div className="btns">
                <h3>Forget Password?</h3>
                <input type="submit" value={'Sign In'} />
            </div>
            <button onClick={()=>navigate('/Register')}>Don't have an account?</button> 
        </form>
    </div>
  )
}

export default Login