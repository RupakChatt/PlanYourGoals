import React, { useState } from 'react'
import PPFImg from '../assets/PPF.png'

const PPFCalculator = () => {
    const [amount, setAmount] = useState(0)
    const [tenure, setTenure] = useState(0)

    const rate = Math.pow(1 + 0.071, tenure)
    const futureValue = amount * [(rate - 1) / 0.071]

    return (
        <div>
            <div className='m-2'>
                <h1 className='text-center text-3xl font-semibold'>PPF Calculator</h1>
            </div>
            <div className='flex flex-col-reverse items-center justify-center md:flex md:flex-row md:ml-[5rem] mt-5 md:mr-[5rem] md:items-center md:justify-between'>
                <form>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Amount" className='font-semibold text-lg'>Investment Amount</label>
                        <input type="number" placeholder='Ex.: 10000' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className='flex flex-col items-start  m-6'>
                        <label htmlFor="Tenure" className='font-semibold text-lg'>Tenure(In Years)</label>
                        <input type="number" placeholder='Minimum:15' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e) => setTenure(e.target.value)} />
                    </div>
                    <div className='md:ml-5'><h2 className='text-lg text-center md:text-left text-blue-600'>Current Rate: 7.1%</h2></div>
                </form>
                <img src={PPFImg} alt="PPF Img" className='md:max-w-[25rem]' />
            </div>
            <div className='md:ml-[6.2rem] m-2 bg-slate-300 md:inline-block p-3 rounded-md border border-slate-800 shadow-lg'>
                <h3 className='text-2xl m-2'>Invested Amount: <span className='text-blue-600'>{amount ? (amount * tenure).toLocaleString() : 0}</span></h3>
                <h3 className='text-2xl m-2'>Maturity Value: <span className='text-blue-600'>{futureValue ? futureValue.toLocaleString(undefined, {maximumFractionDigits: 2}) : 0}</span></h3>
            </div>
        </div>
    )
}

export default PPFCalculator