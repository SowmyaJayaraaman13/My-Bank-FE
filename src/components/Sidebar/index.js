import { Card } from '@nextui-org/react';
import React from 'react'
import { TbTransactionDollar } from "react-icons/tb";

function SideBar() {
  return (
    <div className='lg:w-16 md:w-16 hidden lg:flex flex-col md:flex border-e-gray-600 h-[80vh]'>
        <TbTransactionDollar />
    </div>
  )
}

export default SideBar