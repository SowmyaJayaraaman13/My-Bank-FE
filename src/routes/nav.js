import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Transactions from '../pages/Transactions/Transactions'

function NavigationRoutes() {
  return (
    <Routes>
        <Route path='transactions' element={<Transactions />} />
    </Routes>
  )
}

export default NavigationRoutes