import React, { useState } from 'react'
import EMIImg from '../assets/Emi.jpg'

const EMICalculator = () => {
    const [loan, setLoan] = useState(0)
    const [tenure, setTenure] = useState(0)
    const [interest, setInterest] = useState(0)

    const intRate = interest / 100 / 12
    const loanTenure = tenure * 12
    const emiValue = [loan * intRate * [Math.pow(1 + intRate, loanTenure)]] / [[Math.pow(1 + intRate, loanTenure)] - 1]
    const totalPayable = emiValue * loanTenure
    const accruedInterest = totalPayable - loan

    return (
        <div>
            <div className='m-2'>
                <h1 className='text-3xl font-semibold text-center'>EMI Calculator</h1>
            </div>
            <div className='flex flex-col-reverse items-center justify-center md:flex md:flex-row md:ml-[5rem] md:mr-[5rem] md:items-center md:justify-between'>
                <form>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Amount" className='text-lg font-semibold'>Loan Amount</label>
                        <input type="number" placeholder='Ex.: 10000' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e) => setLoan(e.target.value)} />
                    </div>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Tenure" className='text-lg font-semibold'>Tenure(In Years)</label>
                        <input type="number" placeholder='Ex.:10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e) => setTenure(e.target.value)} />
                    </div>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Rate" className='text-lg font-semibold'>Interest(%)</label>
                        <input type="number" placeholder='Ex.:10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e) => setInterest(e.target.value)} />
                    </div>
                </form>
                <img src={EMIImg} alt="Emi Img" className='md:max-w-[25rem]' />
            </div>
            <div className='m-2 md:ml-[6rem] bg-slate-300 md:inline-block p-3 rounded-md border border-slate-800 shadow-lg'>
                <h3 className='m-2 text-2xl'>EMI Value: <span className='text-blue-600 '>{emiValue ? emiValue.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
                <h3 className='m-2 text-2xl'>Total Loan Amount: <span className='text-blue-600'>{loan ? loan.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
                <h3 className='m-2 text-2xl'>Total Payable Amount: <span className='text-blue-600'>{totalPayable ? totalPayable.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
                <h3 className='m-2 text-2xl'>Accrued Interest: <span className='text-blue-600'>{accruedInterest ? accruedInterest.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
            </div>
        </div>
    )
}

export default EMICalculator