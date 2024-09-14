import React from 'react'
import SideBar from '../components/Sidebar'

function DashboardLayout({children}) {
  return (
    <div className='flex'>
        <SideBar />
        {children}
    </div>
  )
}

export default DashboardLayout