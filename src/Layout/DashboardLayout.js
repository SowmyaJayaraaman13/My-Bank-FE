import React from 'react'
import SideBar from '../components/Sidebar'

function DashboardLayout({children}) {
  return (
    <div className='flex'>
      <div className='w-[20%] hidden lg:block md:block'>
        <SideBar />
      </div>
      <div className='p-5 box-border w-full h-[calc(100vh-4rem)] mt-[4rem] overflow-y-scroll'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout