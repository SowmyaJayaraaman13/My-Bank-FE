import React, { useEffect } from 'react'
import SideBar from '../components/Sidebar'
import { Card } from '@nextui-org/react'

function DashboardLayout({children}) {
  useEffect(() => {
    console.log('TOKEN =>', localStorage.getItem('token'))
  }, []);
  return (
    <div className='flex'>
      <div className='w-[20%] hidden lg:block md:block'>
        <SideBar />
      </div>
      <Card className='p-5 m-2 box-border w-full h-[calc(100vh-5rem)] overflow-y-auto'>
        {children}
      </Card>
    </div>
  )
}

export default DashboardLayout