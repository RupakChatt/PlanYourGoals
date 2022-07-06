import React, { useState } from 'react'
import SIPImg from '../assets/SIP.png'

const SIPCalculator = () => {
    const [rate, setRate] = useState(0)
    const [tenure, setTenure] = useState(0)
    const [invAmount, setInvAmount] = useState(0)

    const invRate = rate / 100 / 12
    const invTenure = tenure * 12
    const futureValue = invAmount * [Math.pow(1+invRate, invTenure) - 1] * (1+invRate) / invRate
    const totalAmount = invAmount * invTenure
    const earnings = (futureValue - totalAmount)

    return (
        <div>
            <div className='m-2'>
                <h1 className='text-center text-3xl font-semibold'>SIP Calculator</h1>
            </div>
            <div className='flex flex-col-reverse items-center justify-center md:flex md:flex-row md:ml-[5rem] md:mr-[5rem] md:items-center md:justify-between'>
                <form>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Amount" className='font-semibold text-lg'>Monthly Investment Amount</label>
                        <input type="number" placeholder='Ex.: 10000' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=>setInvAmount(e.target.value)}/>
                    </div>
                    <div className='flex flex-col items-start  m-6'>
                        <label htmlFor="Tenure" className='font-semibold text-lg'>Tenure(In Years)</label>
                        <input type="number" placeholder='Ex.:10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=>setTenure(e.target.value)}/>
                    </div>
                    <div className='flex flex-col items-start  m-6'>
                        <label htmlFor="Rate" className='font-semibold text-lg' >Expected Return (P.A)</label>
                        <input type="number" placeholder='Ex.:10%' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e) => setRate(e.target.value)}/>
                    </div>
                </form>
                <img src={SIPImg} alt="Lumpsum Img" className='md:max-w-[30rem]' />
            </div>
            <div className='m-2 md:ml-[6.5rem] bg-slate-300 md:inline-block p-3 rounded-md border border-slate-800 shadow-lg'>
            <h3 className='text-2xl m-2'>Future Value: <span className='text-blue-600'>{futureValue ? futureValue.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
            <h3 className='text-2xl m-2'>Total Earnings: <span className='text-blue-600'>{earnings ? earnings.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
            <h3 className='text-2xl m-2'>Total Amount Deposited: <span className='text-blue-600'>{totalAmount ? totalAmount.toLocaleString() : 0}</span></h3>
            </div>
        </div>
    )
}

export default SIPCalculator