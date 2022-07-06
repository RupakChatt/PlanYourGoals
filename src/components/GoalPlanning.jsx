import React, {useState} from 'react'
import GoalPlanningImg from '../assets/goalPlanning.jpg'

const GoalPlanning = () => {
    const [goalAmount, setGoalAmount] = useState(0)
    const [tenure, setTenure] = useState(0)
    const [returnRate, setReturnRate] = useState(0)

    const rate = returnRate / 100 /12
    const invTenure = tenure * 12
    const divisor = [Math.pow(1+rate, invTenure) - 1] * (1+rate) / rate
    const monthlyInvestment = goalAmount / divisor
    const invRateDivisor = Math.pow(1+rate, invTenure)
    const presentValue = goalAmount / invRateDivisor

    return (
        <div>
            <div className='m-2'>
                <h1 className='text-3xl font-semibold text-center'>Goal Calculator</h1>
            </div>
            <div className='flex flex-col-reverse items-center justify-center md:flex md:flex-row md:ml-[5rem] md:mr-[5rem] md:items-center md:justify-between'>
                <form>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Amount" className='text-lg font-semibold'>Target Amount</label>
                        <input type="number" placeholder='Ex.: 10000' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required  onChange={(e)=>setGoalAmount(e.target.value)}/>
                    </div>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Tenure" className='text-lg font-semibold'>Tenure(In Years)</label>
                        <input type="number" placeholder='Ex.:10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=>setTenure(e.target.value)}/>
                    </div>
                    <div className='flex flex-col items-start m-6'>
                        <label htmlFor="Rate" className='text-lg font-semibold'>Expected Rate of Return(%)</label>
                        <input type="number" placeholder='Ex.:10' className='border border-slate-700 outline-none rounded-md md:w-[40rem] p-1' required onChange={(e)=>setReturnRate(e.target.value)}/>
                    </div>
                </form>
                <img src={GoalPlanningImg} alt="Goal Planning Img" className='max-w-[25rem]' />
            </div>
            <div className='md:ml-[6rem] bg-slate-300 m-2 md:inline-block p-3 rounded-md border border-slate-800 shadow-lg'>
                <h3 className='m-2 text-2xl'>Monthly Investment: <span className='text-blue-600 '>{monthlyInvestment ? monthlyInvestment.toLocaleString(undefined, {maximumFractionDigits:2}) : 0}</span></h3>
                <h3 className='m-2 text-2xl'>Lumpsum Investment: <span className='text-blue-600'>{presentValue ? presentValue.toLocaleString(undefined, {maximumFractionDigits:2}): 0}</span></h3>
            </div>
        </div>
    )
}

export default GoalPlanning