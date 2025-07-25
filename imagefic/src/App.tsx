import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'

import Layout from './Components/Layout'
import SignUp from './Components/Auth/signUp'
import Login from './Components/Auth/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Cars from './Components/Dashboard/Cars'

import ProtectedRoute from './Components/ProtectedRoute'
import { AuthProvider } from './Components/Auth/context/AuthContext'
import Nature from './Components/Dashboard/Nature'


const App: React.FC= ()=> {
  return(
      <AuthProvider>
    <Routes>

        <Route path='/' element={<Layout/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/cars' element={<Cars />} />
        <Route path='/nature' element= {<Nature />} />
    </Routes>
      </AuthProvider>

  )
    
}

export default App
