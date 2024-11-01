import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Transactions from '../pages/Transactions/Transactions'
import Cards from '../pages/Cards/Cards'
import Settings from '../pages/Settings/Settings'
import DashboardLayout from '../Layout/DashboardLayout'

function NavigationRoutes() {
  return (
    <Routes>
        <Route path='transactions' element={<DashboardLayout><Transactions /></DashboardLayout>} />
        <Route path='cards' element={<DashboardLayout><Cards /></DashboardLayout>} />
        <Route path='settings' element={<DashboardLayout><Settings /></DashboardLayout>} />
    </Routes>
  )
}

export default NavigationRoutes