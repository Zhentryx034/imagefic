import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Layout from './Components/Layout'
import SignUp from './Components/Auth/signUp'
import Login from './Components/Auth/Login'


const App: React.FC= ()=> {
  return(
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
    </Routes> 
  
  )
    
}

export default App
