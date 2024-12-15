import React from 'react'
import NoData from '../../components/No Data/index'
import { useBoundStore } from '../../store'


function Dashboard() {
  const { user } = useBoundStore((state) => state)
  const noData = {
    title: `Welcome ${user.name}`,
    description: 'Add a card and make a transaction to see the magic unfold on your dashboard!',
    image: 'manage_money.gif'
  }
  return (
    <div className='p-5 box-border'>
      <NoData {...noData} />
    </div>
  )
}

export default Dashboard