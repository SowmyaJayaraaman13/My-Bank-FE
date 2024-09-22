import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Transactions from '../pages/Transactions/Transactions'
import Cards from '../pages/Cards/Cards'
import Settings from '../pages/Settings/Settings'

function NavigationRoutes() {
  return (
    <Routes>
        <Route path='transactions' element={<Transactions />} />
        <Route path='cards' element={<Cards />} />
        <Route path='settings' element={<Settings />} />
    </Routes>
  )
}

export default NavigationRoutes