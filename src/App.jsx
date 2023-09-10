import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/LoginRegister/Login'
import Register from './Components/LoginRegister/Register'
import Admin from './Components/Admin/Admin'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Login' Component={Login}/>
        <Route path='/Register' Component={Register}/>
        <Route path='/Admin' Component={Admin}/>
      </Routes>
    </div>
  )
}

export default App