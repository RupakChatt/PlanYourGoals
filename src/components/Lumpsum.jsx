import React, {useState} from 'react'
import LumpsumImg from '../assets/lumpsum.jpg'


const Lumpsum = () => {
    const [amount, setAmount] = useState(0)
    const [rate, setRate] = useState(0)
    const [tenure, setTenure] = useState(0)

    const investRate = rate / 100
    
    const investedAmount = amount
    const futureValue = Math.floor(amount * [Math.pow(1+ investRate, tenure)])
    const earnings = futureValue - investedAmount

  return (
    <div> 
        <div className='m-2'>
            <h1 className='text-3xl font-semibold text-center'>Lumpsum Calculator</h1>
        </div>
        <div className='flex flex-col-reverse items-center justify-center md:flex md:flex-row md:ml-[5rem] md:mr-[5rem] md:items-center md:justify-between'>
                <form>
                    <div className='flex flex-col items-start m-6'>
                    <label htmlFor="Amount" className='text-lg font-semibold'>Investment Amount</label>
                    <input type="number" placeholder='Ex.: 10000'  className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=>setAmount(e.target.value)}/>
                    </div>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Tenure" className='text-lg font-semibold'>Tenure(In Years)</label>
                        <input type="number"  placeholder='Ex.:10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=> setTenure(e.target.value)}/>
                    </div>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Rate" className='text-lg font-semibold'>Expected Return (%)</label>
                        <input type="number"  placeholder='Ex.:10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=> setRate(e.target.value)}/>
                    </div>
                </form>
                <img src={LumpsumImg} alt="Lumpsum Img" className='md:max-w-[20rem]'/>
        </div>
        <div className='m-2 mb-2 md:ml-[6rem] bg-slate-300 md:inline-block p-3 rounded-md border border-slate-800 shadow-lg'>
            <h3 className='m-2 text-2xl'>Total Corpus Value: <span className='text-blue-600'>{futureValue ? futureValue.toLocaleString(undefined, {maximumFractionDigits:2}): 0}</span></h3>
            <h3 className='m-2 text-2xl'>Total Earnings: <span className='text-blue-600'>{earnings ? earnings.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
            <h3 className='m-2 text-2xl'>Invested Amount: <span className='text-blue-600'>{investedAmount ? investedAmount.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
        </div>
    </div>
  )
}

export default Lumpsum