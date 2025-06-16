import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Layout from './Components/Layout'
import SignUp from './Components/Auth/signUp'


const App: React.FC= ()=> {
  return(
    <Routes>
      <Route path='/' element={<Layout/>} />
      <Route path='/signup' element={<SignUp />} />
    </Routes> 
  
  )
    
}

export default App
