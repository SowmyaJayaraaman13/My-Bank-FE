import { Image } from '@nextui-org/react'
import React from 'react'
import { useBoundStore } from '../../store'

function DashboardNoData() {
  const { user } = useBoundStore((state) => state)
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex-col justify-center w-[400px]'>
        <Image src='/gifs/Manage money.gif' width={400} />
        <p className='font-bold text-md text-center'>Welcome {user.name}</p>
        <p className='font-bold text-md text-center'>Add a card and make a transaction to see the magic unfold on your dashboard!</p>
        </div>
    </div>
  )
}

export default DashboardNoData