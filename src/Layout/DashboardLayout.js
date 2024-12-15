import React, { useEffect } from 'react'
import SideBar from '../components/Sidebar'
import { Card } from '@nextui-org/react'
import { UserService } from '../services/user'
import { useBoundStore } from '../store'

function DashboardLayout({children}) {
  const {addUser, user} = useBoundStore((state) => state)
  const getUserData = async () => {
    const response = await UserService.getUser();
    addUser(response.data.user);
  }
  useEffect(() => {
    getUserData()
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