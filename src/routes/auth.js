import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from '../pages/Auth/login'
import Signup from '../pages/Auth/signup'

function AuthRoutes() {
  return (
    <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default AuthRoutes