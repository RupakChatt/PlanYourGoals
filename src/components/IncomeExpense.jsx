import React from 'react'

const IncomeExpense = ({formData, setFormData}) => {
  return (
    <div>
      <form className='md:flex md:flex-row md:flex-wrap md:items-center md:justify-center'>
        <div className='m-5 flex flex-col'>
          <label htmlFor="Income" className='font-semibold'>Income(Monthly)</label>
          <input type="text"   className='border border-slate-600 rounded-lg outline-none p-1' value={formData.income} onChange={(e) => setFormData({...formData, income:e.target.value})}/>
        </div>
        <div className='m-5 flex flex-col'>
          <label htmlFor="Expense" className='font-semibold'>Expense(Monthly)</label>
          <input type="text"   className='border border-slate-600 rounded-lg outline-none p-1' value={formData.expense} onChange={(e) => setFormData({...formData, expense: e.target.value})}/>
        </div>
        <div className='m-5 flex flex-col'>
          <label htmlFor="Insurance&Investments" className='font-semibold'>Insurance & Investments(if any)</label>
          <input type="text"   className='border border-slate-600 rounded-lg outline-none p-1' value={formData.insuranceAndInvestment} onChange={(e)=> setFormData({...formData, insuranceAndInvestment: e.target.value})}/>
        </div>
      </form>
    </div>
  )
}

export default IncomeExpense