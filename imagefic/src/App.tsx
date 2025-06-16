import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Layout from './Components/Layout'


const App: React.FC= ()=> {
  return(
    <Routes>
      <Route path='/' element={<Layout/>} />
    </Routes>
  
  )
    
}

export default App
