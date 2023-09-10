import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </div>
  )
}

export default App