import React from 'react'
import PieChartExample from '../Charts/Pie'

function ExpenseStats() {
  return (
    <div className="w-full lg:w-[25%] md:w-[25%] h-full my-5">
          <p className="text-lg font-bold mb-3">Card Expense Stats</p>
          <PieChartExample />
    </div>
  )
}

export default ExpenseStats