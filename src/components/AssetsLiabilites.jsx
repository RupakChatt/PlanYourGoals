import React from 'react'

const AssetsLiabilites = ({ formData, setFormData }) => {
  return (
    <div className='justify-start md:flex md:flex-row md:items-start'>
      <div className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-xl font-semibold'>Assets</h1>
        <form className='md:flex md:flex-col md:items-center md:justify-between md:flex-wrap'>
          <div className='flex flex-col m-5'>
            <label htmlFor="fixedAssets" className='font-semibold'>Fixed Assets</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.fixedAssets} onChange={(e) => setFormData({ ...formData, fixedAssets: e.target.value })} />
          </div>
          <div className='flex flex-col m-5'>
            <label htmlFor="equity" className='font-semibold'>Equity(Shares) Assets</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.equity} onChange={(e) => setFormData({ ...formData, equity: e.target.value })} />
          </div>
          <div className='flex flex-col m-5'>
            <label htmlFor="debt" className='font-semibold'>Debt Assets</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.debt} onChange={(e) => setFormData({ ...formData, debt: e.target.value })} />
          </div>
          <div className='flex flex-col m-5'>
            <label htmlFor="cash" className='font-semibold'>Cash</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.cash} onChange={(e) => setFormData({ ...formData, cash: e.target.value })} />
          </div>
          <div className='flex flex-col m-5'>
            <label htmlFor="otherAssets" className='font-semibold'>Other Assets(if any)</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.otherAssets} onChange={(e) => setFormData({ ...formData, otherAssets: e.target.value })} />
          </div>
        </form>
      </div>
      <div className='flex flex-col items-center mt-4 md:flex md:flex-col md:items-center md:justify-center'>
        <h1 className='text-xl font-semibold'>Liabilities(Outstanding Amounts)</h1>
        <form className='md:flex md:flex-col md:items-center md:justify-between'>
          <div className='flex flex-col m-5'>
            <label htmlFor="homeLoan " className='font-semibold'>Home Loan</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.homeLoan} onChange={(e) => setFormData({ ...formData, homeLoan: e.target.value })} />
          </div>
          <div className='flex flex-col m-5'>
            <label htmlFor="vehicleLoan" className='font-semibold'>Vehicle Loan</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.vehicleLoan} onChange={(e) => setFormData({ ...formData, vehicleLoan: e.target.value })} />
          </div>
          <div className='flex flex-col m-5'>
            <label htmlFor="otherLoan" className='font-semibold'>Other Loan(if any)</label>
            <input type="text" className='p-1 border rounded-lg outline-none border-slate-600' value={formData.otherLoan} onChange={(e) => setFormData({ ...formData, otherLoan: e.target.value })} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AssetsLiabilites