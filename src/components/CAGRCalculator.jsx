import React,{useState} from 'react'
import CAGRImg from '../assets/CAGR.jpg'

const CAGRCalculator = () => {
    const [beginningValue, setBeginningValue] = useState(0)
    const [endValue, setEndValue] = useState(0)
    const [tenure, setTenure] = useState(0)

    const invTenure = 1 / tenure
    const division = endValue / beginningValue 
    const cagrReturn = [Math.pow(division, invTenure) - 1] * 100

  return (
    <div> 
        <div className='m-2'>
    <h1 className='text-center text-3xl font-semibold'>CAGR Calculator</h1>
</div>
<div className='flex flex-col-reverse items-center justify-center md:flex md:flex-row md:ml-[5rem] mt-5 md:mr-[5rem] md:items-center md:justify-between'>
    <form>
        <div className='flex flex-col items-start m-6'>
            <label htmlFor="Amount" className='font-semibold text-lg'>Beginning Value</label>
            <input type="number" placeholder='Ex.: 10000' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=>setBeginningValue(e.target.value)}/>
        </div>
        <div className='flex flex-col items-start  m-6'>
            <label htmlFor="Tenure" className='font-semibold text-lg'>End Value</label>
            <input type="number" placeholder='Ex.:200000' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=> setEndValue(e.target.value)}/>
        </div>
        <div className='flex flex-col items-start  m-6'>
            <label htmlFor="Tenure" className='font-semibold text-lg'>Tenure(In Years)</label>
            <input type="number" placeholder='10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e) => setTenure(e.target.value)}/>
        </div>    
    </form>
    <img src={CAGRImg} alt="CAGR Img" className='md:max-w-[25rem]' />
</div>
<div className='md:ml-[6.2rem] m-2 bg-slate-300 md:inline-block p-3 rounded-md border border-slate-800 shadow-lg'>
    <h3 className='text-2xl m-2'>CAGR Return: <span className='text-blue-600'>{cagrReturn ? cagrReturn.toLocaleString(undefined, {maximumFractionDigits: 2}) : 0}</span>%</h3>
</div>
</div>
  )
}

export default CAGRCalculator